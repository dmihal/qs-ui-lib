import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { LayoutSizes, MarginPaddingSize, Colors, Typography } from '../vars.mjs';

import Carousel from 'nuka-carousel';

const Slider = ({ children, type, label }) => (
  <div className="Slider">
    { type === 'A'
      ? (
        <React.Fragment>
          <div className="Slider-offset-bg"/>
          <Carousel
            slidesToShow="3"
            heightMode="first"
            renderCenterLeftControls={() => null}
            renderCenterRightControls={() => null}
            renderBottomCenterControls={() => null}
            renderTopLeftControls={({ previousSlide, nextSlide }) => (
              <React.Fragment>
                <Button
                  bgColor={'rgba(215, 214, 215, 1.0)'}
                  type="left"
                  onClick={previousSlide}
                  size={MarginPaddingSize[2]}
                  styleOverrides={"border: none !important;"}
                  />
                <Button
                  bgColor={'rgba(215, 214, 215, 1.0)'}
                  type="right"
                  onClick={nextSlide}
                  size={MarginPaddingSize[2]}
                  styleOverrides={"border: none !important; border-left: 1px solid "+Colors.Alabaster+" !important;"}/>
                <h3 className="slider-label">{label}</h3>
              </React.Fragment>
            )}>
            {children}
          </Carousel>
        </React.Fragment>
      )
      : (<React.Fragment>
          <Carousel
            slidesToShow="3"
            heightMode="first"
            renderCenterLeftControls={({ previousSlide }) => (
              <Button
                type="left"
                onClick={previousSlide}/>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <Button
                  type="right"
                  onClick={nextSlide}/>
            )}
            renderBottomCenterControls={() => null}>
            {children}
          </Carousel>
        </React.Fragment>
        )
    }
    <style jsx>{`
      .Slider {
        padding: ${ type === 'A' ? MarginPaddingSize[2]+" 0" : ''};
        position: relative;
        overflow: hidden;

        .Slider-offset-bg {
          background: #eeeeee;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: calc( ${MarginPaddingSize[2]} * 3);
        }

        :global(.slider-control-topleft) {
          top: ${ type === 'A' ? '-'+MarginPaddingSize[2]+' !important' : ''};
          left: ${ type === 'A' ? 'calc( '+MarginPaddingSize[2]+' * 3) !important' : ''};
        }

        :global(.slider-slide) { 
          padding: ${ type === 'A' ? "padding-left: 20px !important;" : ''}; 
        }

        :global(.slider-frame) {
          overflow: visible !important;
        }

        .slider-label {
          display: inline-block;
          margin: 0 0 0 ${MarginPaddingSize[3]};
          line-height: ${MarginPaddingSize[2]};
        }
      }
    `}</style>
  </div>
)

Slider.propTypes = {
  children: PropTypes.array.isRequired
}

Slider.defaultProps = {}

export default Slider
