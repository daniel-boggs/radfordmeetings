import React from 'react';
import './index.scss';
import { BsArrowUpCircle } from 'react-icons/bs'

function ScrollToTop() {
  window.onscroll = function() {
    scrollFunction()
  };

  function scrollFunction() {
    const scrollToTopButton = document.getElementById("scrollToTop");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button onClick={topFunction} id="scrollToTop" title="Go to top">
      <BsArrowUpCircle />
    </button>
  )
}

export default ScrollToTop;