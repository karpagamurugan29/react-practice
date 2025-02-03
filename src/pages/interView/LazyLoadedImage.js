import React, { useEffect, useRef, useState } from 'react'
import placeHolderImg from '../../images/placeholderimg.jpg'


const LazyLoad = ({ source, alt }) => {
    const [showImage, setShowImage] = useState(placeHolderImg)
    const imageRef = useRef(null)

    useEffect(() => {
        const currentImage = imageRef.current
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShowImage(source)
                observer.unobserve(currentImage)
            }
        },
            { threshold: 0.1 }
        )
        if (currentImage) {
            observer.observe(currentImage)
        }
        console.log(observer)
        return () => {
            if (currentImage) {
                observer.unobserve(currentImage)
            }
        }
    }, [source])

    return (
        <img ref={imageRef} src={showImage} alt={alt} />
    )
}

const LazyLoadedImage = () => {
    return (
        <div>
            <LazyLoad
                source='https://img.freepik.com/free-photo/lion-dry-forest-landscape_23-2151661800.jpg'
                alt='images'
            />
        </div>
    )
}

export default LazyLoadedImage
