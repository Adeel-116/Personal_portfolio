import 'react'

function ProfilePicture() {
    return (

        <div className="2xl:w-[330px] 2xl:h-[407px] sm:w-[320px] sm:h-[407px] w-[280px] h-[370px] relative">
            {/* Background Image */}
            <div
                className="absolute z-10 bg-cover w-full h-full bg-center"
                style={{ backgroundImage: 'url("/src/assets/profilePicture/pictures1.png")'}}
            ></div>

            {/* Overlay */}
            <div className="animation absolute z-0 w-full h-full bg-lightGreen top-0 left-0"></div>
        </div>

    )
}

export default ProfilePicture
