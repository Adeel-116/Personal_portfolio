import 'react'

function ProfilePicture() {
    return (

        <div className="w-[330px] h-[407px] bg-red-500  relative">
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
