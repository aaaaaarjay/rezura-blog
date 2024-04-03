import React, { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="carousel-wrapper">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container text-white">
          <div className="embla__slide">
            <img src="/pic1.jpg" alt="1" />
                     </div>
                <div className="embla__slide">
                    <img src="/pic2.jpg" alt="2"/>
                     </div>
                <div className="embla__slide">
                    <img src="/pic3.jpg" alt="3"/>
                     </div>
                     <div className="embla__slide">
                    <img src="/pic4.jpg" alt="4" />
                     </div>
                <div className="embla__slide">
                    <img src="/pic5.jpg" alt="5"/>
                     </div>
                <div className="embla__slide">
                    <img src="/pic6.jpg" alt="6"/>
                     </div>
                     <div className="embla__slide">
                    <img src="/pic7.jpg" alt="7" />
                    </div>
                <div className="embla__slide">
                    <img src="/pic8.jpg" alt="8"/>
                     </div>
                <div className="embla__slide">
                    <img src="/pic9.jpg" alt="9"/>
                     </div>
                     <div className="embla__slide">
                    <img src="/pic10.jpg" alt="10" />
                     </div>
                <div className="embla__slide">
                    <img src="/pic11.jpg" alt="11"/>
                     </div>
                <div className="embla__slide">
                    <img src="/pic12.jpg" alt="12"/>
                     </div>
                     <div className="embla__slide">
                    <img src="/pic13.jpg" alt="13" />
                    </div>
                <div className="embla__slide">
                    <img src="/pic14.jpg" alt="14"/>
                     </div>
                <div className="embla__slide">
                    <img src="/pic15.jpg" alt="15"/>
                     </div>
                     <div className="embla__slide">
                    <img src="/pic16.jpg" alt="16" />
                     </div>
                <div className="embla__slide">
                    <img src="/pic17.jpg" alt="17"/>
                     </div>

        </div>
        </div>
        </div>
    )
}