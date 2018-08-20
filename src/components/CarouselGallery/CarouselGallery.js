import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { MarginPaddingSize, Colors } from '../vars.js';

import Carousel from 'nuka-carousel';

const CarouselGallery = ({ children, type, label, bottomLabel }) => (
  <div className="CarouselGallery">
    { type === 'A'
      ? (
        <React.Fragment>
          <div className="CarouselGallery-offset-bg"/>
          <Carousel
            slidesToShow={window.innerWidth >= 500 ? 3 : 1}
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
                <h3 className="CarouselGallery-label">{label}</h3>
              </React.Fragment>
            )}
            renderBottomLeftControls={() => (
              <div className="CarouselGallery-bottomLabel">
                {bottomLabel}
              </div>
            )}>
            {children}
          </Carousel>
        </React.Fragment>
      )
      : (<React.Fragment>
          <Carousel
            slidesToShow={3}
            heightMode="first"
            cellSpacing={10}
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
      .CarouselGallery {
        padding: ${ type === 'A' ? MarginPaddingSize[2]+" 0 0 0" : ''};
        position: relative;
        overflow: hidden;

        .CarouselGallery-offset-bg {
          background: #eeeeee;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: calc( ${MarginPaddingSize[2]} * 3);
          @media (width <= 500px) {
            left: 0;
          }
        }

        :global(.slider-control-topleft) {
          display: flex;
          top: ${ type === 'A' ? 'calc(-2px + '+'-'+MarginPaddingSize[2]+') !important' : ''};
          left: ${ type === 'A' ? 'calc( '+MarginPaddingSize[2]+' * 3) !important' : ''};
          @media (width <= 500px) {
            left: 0 !important;
          }
        }

        :global(.slider-control-bottomleft) {
          left: ${ type === 'A' ? 'calc( '+MarginPaddingSize[2]+' * 3) !important' : ''};
          @media (width <= 500px) {
            left: 0 !important;
          }
        }

        :global(.slider-frame) {
          overflow: visible !important;
        }
        

        .CarouselGallery-label,
        .CarouselGallery-bottomLabel {
          display: inline-block;
          margin: 0 0 0 ${MarginPaddingSize[3]};
          line-height: ${MarginPaddingSize[2]};
        }
      }
    `}</style>
  </div>
)

CarouselGallery.propTypes = {
  children: PropTypes.array.isRequired
}

CarouselGallery.defaultProps = {}

export default CarouselGallery