import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
import internet from '../../assets/internet.png';
import chart from '../../assets/chart.png';
import server from '../../assets/server.png';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      step: 1
    };
  }

  decrementStep() {
    this.setState(prevState => ({
      step: prevState.step - 1
    }));
  }

  incrementStep() {
    this.setState(prevState => ({
      step: prevState.step + 1
    }));
  }

  showStep() {
    switch (this.state.step) {
      case 1:
        return (
          <div className="step">
            <i className="fas fa-dragon" />
            <div className="step-header">
              <img src={internet} alt="internet search" />
              <p>
                DROGON is a "whois lookup" that uses the{' '}
                <a
                  href="https://www.whoisxmlapi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  whoisxmlapi
                </a>
                . It provides you the ability to do many searches: whois lookup,
                reverse-ip, subdomain lookup, and ping (packet internet groper).
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step">
            <i
              className="fas fa-chevron-left"
              onClick={() => this.decrementStep()}
            />

            <div className="step-header">
              <img src={chart} alt="internet search" />
              <p>
                Drogon stores your searches and gives you a data visulatization
                set to see all of your searches graphed out over time.
              </p>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step">
            <i
              className="fas fa-chevron-left"
              onClick={() => this.decrementStep()}
            />

            <div className="step-header">
              <img src={server} alt="internet search" />
              <p>
                Store your own data to keep track of all of your previous
                searches for future reference.
              </p>
            </div>
          </div>
        );

      default:
        return;
    }
  }

  render() {
    const { step } = this.state;
    return (
      <div className="welcome-section">
        {this.showStep()}

        <div className="welcome-nav">
          <Link to="/">
            <div className="skip-btn">
              <h3 onClick={() => this.decrementStep()}>SKIP</h3>
            </div>
          </Link>

          <div className="dots">
            <ul>
              <li className={step !== 1 ? 'selected-step' : null} />
              <li className={step !== 2 ? 'selected-step' : null} />
              <li className={step !== 3 ? 'selected-step' : null} />
            </ul>
          </div>

          <div className="next-btn">
            {step === 3 ? (
              <Link to="/">
                <h3>ENTER</h3>
              </Link>
            ) : (
              <h3 onClick={() => this.incrementStep()}>NEXT</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
