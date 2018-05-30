import React from 'react';
import PropTypes from 'prop-types';
import LayoutWrapper from './LayoutWrapper';
import LayoutGrid from './LayoutGrid';
import GlobalTypography from './GlobalTypography';
import { LayoutSizes, MarginPaddingSize } from '../vars.mjs';



/**
 * This is a footer layout block
 */
const Footer = () => (
  <footer className="footer">
    <LayoutWrapper>
      <LayoutGrid columns="2" offset="right">
        <div>
          <div className="box -stacked">
            <div className="logo">Quantstamp</div>
            <p className="feedback">
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScNPpLHqlkePlb6WiAQ__cSLC_RwEEQLpzZ13hpIIkCl3VIeQ/viewform">Give us your Product Feedback</a>
            </p>
          </div>
        </div>
        <LayoutGrid columns={4}>
          <div>
            <div className="box -stacked">
              <h3 className="footer-title">Company</h3>
              <ul>
                <li>
                  <a href="/team">Our Team</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
                <li>
                  <a target="_blank" href="https://goo.gl/forms/IHdZlYlgpqzZJQET2">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="box -stacked">
              <h3 className="footer-title">Community</h3>
              <ul>
                <li>
                  <a target="_blank" href="https://t.me/quantstamp">Telegram</a>
                </li>
                <li>
                  <a target="_blank" href="https://medium.com/quantstamp">Medium</a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/channel/UCXP3YLX4JdI0gGb9UKSunMg">Youtube</a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/quantstamp">Github</a>
                </li>
                <li>
                  <a target="_blank" href="https://www.facebook.com/quantstamp">Facebook</a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/company/25057251">LinkedIn</a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/Quantstamp">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="box -stacked">
              <h3 className="footer-title">Information</h3>
              <ul>
                <li>
                  <a target="_blank" href="https://docsend.com/view/shcsmhe">Whitepaper</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a target="_blank" href="https://medium.com/quantstamp">Blog</a>
                </li>
                <li>
                  <a href="/media-resources">Media Resources</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="box -stacked">
              <h3 className="footer-title">Smart Contract Audits</h3>
              <ul>
                <li>
                  <a href="/public-reports">Public Reports</a>
                </li>
                <li>
                  <a href="/reports">Your Reports</a>
                </li>
                <li>
                  <a href="/start">Submit a Smart Contract</a>
                </li>
                <li>
                  <a href="/auditrequest">Request a Full Service Audit</a>
                </li>
              </ul>
            </div>
          </div>
        </LayoutGrid>
      </LayoutGrid>
      <LayoutGrid>
        <p className="fine-print">
          © {new Date().toDateString().split(' ')[3]} Quantstamp, Inc
          <span className="divider">|</span>
          <a href="/responsible-disclosure">Responsible Disclosure</a>
          <span className="divider">|</span>
          <a href="/terms">Terms and Conditions</a>
          <span className="divider">|</span>
          <a href="/privacy">Privacy Policy</a>
        </p>
      </LayoutGrid>
    </LayoutWrapper>
    <style jsx>{`
      .fine-print {
        width: 100%;
      }
      ul,
      li {
        list-style: none;
      }
    `}</style>
  </footer>
)

Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer
