
const ProfileStory = ({img, username}) => {
    return(
        <div>
            <div className="h-24 w-24 bg-gray-200 p-[1.5px] rounded-full">
                <div className="bg-white rounded-full p-1">
                    <img className="rounded-full" src={img} alt=""></img>
                </div>
            </div>
            <p className="text-xs w-20 truncate text-center">{username}</p>
        </div>
    )
}

export default ProfileStory
