import React from 'react';

import '../styles/Image.css';

const Image = ({ hits, text }) => {

    // Use this for infinite scroll-----------------------
    // const [isFetching, setIsFetching] = useState(true);


    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, []);

    //   function handleScroll() {
    //     if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    //     setIsFetching(true);
    //   }

    //   useEffect(() => {
    //     if (!isFetching) return;
    //     fetchMoreListItems();
    //   }, [isFetching]);

    //   function fetchMoreListItems() {
    //     setTimeout(() => {
    //       setImages(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
    //       setIsFetching(false);
    //     }, 2000);
    //   }
    //-------------------------------------------------------
    return (
        <div className="images">
            {hits.filter(hit => {
                let newHit;
                if (hit.tags.toLowerCase().includes(text.toLocaleLowerCase())) {
                    newHit = hit;
                }
                return newHit
            }).map((newHit, i) => (
                <img src={newHit.webformatURL} alt='img' key={newHit.id} className='image' />

            ))}
            {/* {isFetching && 'Fetching more list items...'} */}
        </div>
    )
}

export default Image;
