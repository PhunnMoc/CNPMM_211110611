import mockData from './mockData';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="profile-card">
        <div className="profile-header">
          <img src={mockData.avatar} alt="avatar" className="profile-avatar" style={{width: '80px', height: '80px'}} />
          <div>
            <h2>Information</h2>
        
          </div>
          <a href={mockData.github} target="_blank" rel="noopener noreferrer" className="close-button">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{width: '24px', height: '24px'}} />
          </a>
        </div>
        <div className="profile-details">
          <div className="detail-item">
            <span className='title-infr'>Name</span>
            <span>{mockData.name}</span>
          </div>
          <div className="detail-item">
            <span className='title-infr'>Id Student</span>
            <span>{mockData.idStudent}</span>
          </div>
          <div className="detail-item">
            <span className='title-infr'>Current Job</span>
            <span>{mockData.currentJob}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
