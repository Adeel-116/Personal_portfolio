import "./App.css";
import Button from "./Components/Button";
// import ContactPage from "./Components/ContactPage/ContactPage";
import { IoIosSend } from "react-icons/io";
import ProfilePicture from "./Components/ProfilePicture"
import DetailsInfo from "./Components/DetailsInfo"
// import Testimonial from "./Components/Testimonial/Testimonial"

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-white overflow-hidden">
        <main className="w-[83%]  h-auto ml-[17%]">
          <section className="flex justify-center items-center h-screen w-full  flex-col">
            <div className="w-[80%] h-auto py-4 flex">
              <div className="w-[60%] h-auto py-7">
                <div className="flex flex-col justify-center">
                  <h1 className="text-xl font-medium text-gray-600">
                    HI, I’M A FREELANCER
                  </h1>
                  <h2 className="text-8xl font-bold text-lightGreen">
                    Developer
                  </h2>
                  <p className="text-gray-700 mt-4 text-lg font-medium">
                    I’m a software engineer specializing in scalable web apps.{" "}
                    <br />
                    Explore my{" "}
                    <a href="#" className="text-teal-500 underline">
                      blog
                    </a>
                    ,{" "}
                    <a href="#" className="text-teal-500 underline">
                      project portfolio
                    </a>
                    , and{" "}
                    <a href="#" className="text-teal-500 underline">
                      online resume
                    </a>
                    .
                  </p>

                  <div className="w-2/3 h-auto py-7 flex gap-7">
                    <div className="w-[40%]">
                      <Button
                        buttonText={"View Portfolio"}
                        buttonIcon={<IoIosSend />}
                      />
                    </div>
                    <div className="w-[40%]">
                      <Button
                        buttonText={"View Resume"}
                        buttonIcon={<IoIosSend />}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[40%] h-auto flex justify-end">
                <ProfilePicture />
              </div>
            </div>

            <div className="w-[80%] flex gap-x-4 h-auto ">
              <DetailsInfo number={"5"} text={"Years of Experience"} />
              <DetailsInfo number={"110"} text={"Project Complete"} />
              <DetailsInfo number={"6K"} text={"Clinet Worldwide"} />
            </div>

            <span className="w-full h-0.5 bg-lightGreen mt-20"></span>
          </section>

          <section className="h-screen w-full flex justify-center items-center">
            <div className="w-[80%] h-auto flex">
              <div className="w-full h-auto  flex flex-row">
                <div className="w-[80%] h-auto  ">
                  <div className="w-full flex flex-col">
                    <div className="w-1/3 h-auto  border-l-4 border-lightGreen flex items-center ">
                      <h1 className="pl-2.5 p-1 text-6xl text-black font-bold">
                        What I do
                      </h1>
                    </div>
                    <div>
                      <p className="text-gray-700 mt-2 text-[16px] font-medium w-[77%]">
                        I have more than 10 years experience building software
                        for clients all over the world. Below is a quick
                        overview of my main technical skill sets and
                        technologies I use. Want to find out more about my
                        experience? Check out my
                        <a href="#" className="text-teal-500 underline">
                          {" "}
                          online resume
                        </a>
                        ,{" "}
                        <a href="#" className="text-teal-500 underline">
                          project portfolio
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-[20%] h-full flex justify-end py-3 items-end ">
                  <div className="w-[90%] ">
                    <Button
                      buttonText={"View Resume"}
                      buttonIcon={<IoIosSend />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="w-full h-auto flex">
            <BgPicture />
          </section> */}

          {/* <section className="testimonial w-full h-auto mt-32">
            <Testimonial />
          </section> */}

          {/* <section>
            <div className="w-full h-auto mt-32 flex justify-center items-center">
              <Blogs />
            </div>
          </section> */}

          {/* <section>
            <div className="w-full h-auto mt-32 flex justify-center items-center">
              <PortfolioSection />
            </div>
          </section> */}

          {/* <ContactPage /> */}
        </main>
      </div>
    </>
  );
}

export default App;
