import React, {
  useEffect,
  useState
} from 'react';
import { usePapaParse } from 'react-papaparse';

export function ParseAndSearch() {
  const { readRemoteFile } = usePapaParse();
  const [data, setData] = useState([]);
  const [userCompany, setUserCompany] = useState('');
  const [newAnswer, setNewAnswer] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const url = 'nasdaq_screener_061322.csv';
  console.log(data);

  useEffect(() => {
    readRemoteFile(url, {
      header: true,
      complete: (results) => {
        console.log('---------------');
        console.log('Results:', results);
        console.log('---------------');
        setData(results.data);
      }
    });
  }, [url, readRemoteFile]);

  console.log('Complete', data.length, 'records');

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let intermediateCompanyName = formData.get('companyname');
    setUserCompany(intermediateCompanyName);
    console.log(intermediateCompanyName);
    try {
      console.log('try block');
      let intermediateNewAnswer =
        data.find(x => {
          if (x.Name.toLowerCase().includes(intermediateCompanyName.toLowerCase())) {
            return x;
          } else {
            return null;
          }
        });
      console.log('Intermediate Answer is: ' + JSON.stringify(intermediateNewAnswer));
      setNewAnswer(intermediateNewAnswer);
      setErrorMessage('');

    } catch (err) {
      console.log('No such company found');
      setNewAnswer({});
      setErrorMessage('No such company found!');
    }
  };

  return (
    <div>
      <section>
        <h2>Symbol Lookup</h2>
        <h3>Don't Know the Stock Symbol?  Input Stock Company Name Here</h3>
        <form id='stock-quote' onSubmit={handleSubmit}>
          <input id='companyname' type="text" name='companyname' placeholder='Company Name' />
          <button type='submit'>Submit</button>
          <h4>Currently has the NASDAQ 8,438 companies and tickers as of 06/13/22</h4>
          <h4>US Companies (and ADRs) Only</h4>
        </form>
      </section>
      <section>
        <h3 id='lookup-output'>
          <em>Your Input:</em> {userCompany}<br />
          <em>Company Name:</em> {newAnswer.Name}<br />
          <em>Symbol:</em> <span className='output-styling'>{newAnswer.Symbol}</span><br />
          <span className='output-styling'>{errorMessage}</span>
        </h3>
      </section>
    </div>
  )
}
