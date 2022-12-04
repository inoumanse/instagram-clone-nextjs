import React, { useRef, useState } from "react";
import stories from "./stories.json";
import Story from "./Story";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

const Stories = () => {

    const storiesRef = useRef(null)
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const onScroll = () => {
        if(storiesRef.current.scrollLeft > 0)
        {
            setShowLeft(true);
        }
        else{
            setShowLeft(false);
        }
        if(storiesRef.current.scrollLeft == storiesRef.current.scrollWidth - storiesRef.current.clientWidth)
        {
            setShowRight(false);
        }
        else{
            setShowRight(true);
        }
    }
    return(
        <div className="relative">
            <div onScroll={onScroll} ref={storiesRef} className="flex space-x-2 overflow-x-scroll bg-white
                    border-gray-200 p-4 scroll-smooth scrollbar-hide">
                {stories.map(story => <Story
                    key={story.id}
                    img={story.avatar}
                    username={story.first_name + story.last_name}
                    />)}
            </div>
            <div className="absolute top-0 p-4 w-full h-full flex justify-between z-10 items-center">
                <button onClick={() => {storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 300}}>
                    <FontAwesomeIcon size="lg" icon={faChevronCircleLeft} color="white"
                        className={`cursor-pointer drop-shadow-lg filter ${showLeft ? "visible" : "invisible"}`}/>
                </button>
                <button onClick={() => {storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 300}}>
                    <FontAwesomeIcon size="lg" icon={faChevronCircleRight} color="white" 
                        className={`cursor-pointer drop-shadow-lg filter ${showRight ? "visible" : "invisible"}`}/>
                </button>
            </div>
        </div>
    )
}

export default Stories
