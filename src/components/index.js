import React from "react";
import { Link } from "react-router-dom";

export const Index = () => {
    return (
        
        <div>
        {/* Aki Reissssss */}

  
        <section className="min-h-screen bg-white  flex items-center">
  
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
  
            <h2 className="text-4xl font-extrabold text-[#0f7383] md:text-5xl max-w-full ">
            
         Action Sync
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl  text-center">
            Powerful task management application designed 
            to help you stay organized, focused, and productive. 
            </p>
            <div className="mt-10 flex flex-row justify-center space-x-4">
              <div>
                <Link to={"/contact"}
                  className="inline-block  bg-[#0f7383] text-white px-8 py-3 rounded-lg font-semibold tracking-wider hover:bg-[#0a5763]"
                >
                  Get Started
                </Link>
              </div>
  
  
              <div>
                <Link to={"/contact"} className="inline-block px-4 py-3 rounded-lg font-semibold tracking-wider text-cyan-500">
                  Get Started
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle ml-2 text-cyan-500">
                    <path d="M1 10H16" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 5L16 10L11 15" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
  
            </div>
          </div>
        </section>
  
        {/* Another Section */}
        <section id="second_section" className="py-32 border-b ">
  
  
          <div className="container mx-auto  text-center flex px-4 space-x-0 space-y-8 md:flex-row md:space-y-0 justify-center max-w-6xl flex-col-reverse">
  
  
  
            <div className="flex flex-col space-y-6  justify-start md:w-1/2 container mx-auto">
              <h2 className="text-lg text-[#0f7383] font-semibold text-center md:text-left uppercase">
              Task Management
              </h2>
              <h2 className="text-1xl font-extrabold  text-center text-black max-w-md md:text-left md:text-5xl ">
                This is the first great feature.
              </h2>
              <h4 className="text-lg text-gray-500 text-center max-w-md md:text-left  ">
              Create, organize, and categorize your tasks in a simple and intuitive interface.
               Capture all your to-dos, 
              ideas, and reminders in one place for easy access and seamless organization.
              </h4>
              <div className="text-center md:text-left">
                <button type="button" class="inline-block bg-[#0f7383] text-white px-4 py-2 rounded-lg hover:bg-[#0a5763]">
                  Get Started
                </button>
              </div>
            </div>
            <div className=" md:w-1/2 flex align-top justify-center md:justify-end ">
              <img src={process.env.PUBLIC_URL + '/img/second.svg'} alt="" className="w-80  " />
            </div>
          </div>
  
        </section>
  
  
  
        {/* Second Section End */}
  
        <section className="py-16">
  
  
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-500 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              pulvinar quis neque et varius.
            </p>
            <div class="mt-16   flex flex-wrap justify-evenly     items-center mx-auto mb-10">
  
  
  
              <div class="px-4 mb-8 w-full md:w-1/2 lg:w-1/3 ">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="flex justify-center">
                    <img src={process.env.PUBLIC_URL + '/img/second.svg'} alt="" className="w-44   " />
                  </div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Progress Tracking</div>
                    <p class="text-gray-500 text-base">
                    Monitor your task progress and leverage insightful analytics. 
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
                  </div>
                </div>
              </div>
  
  
  
              <div class="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="flex justify-center">
                    <img src={process.env.PUBLIC_URL + '/img/second.svg'} alt="" className="w-44   " />
                  </div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Data Security </div>
                    <p class="text-gray-500 text-base">
                    Action Sync prioritizes the security and privacy of your data. 
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
                  </div>
                </div>
              </div>
  
  
  
              <div class="px-4 mb-8 w-full md:w-1/2 lg:w-1/3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="flex justify-center">
                    <img src={process.env.PUBLIC_URL + '/img/second.svg'} alt="" className="w-44   " />
                  </div>
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Sync Across Devices</div>
                    <p class="text-gray-500 text-base">
                    Enjoy seamless synchronization across all your devices
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">photography</span>
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">travel</span>
                    <span class="inline-block bg-[#0f7383] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">winter</span>
                  </div>
                </div>
              </div>
  
  
            </div>
          </div>
        </section>
  
        {/* fourth section */}
        <section id="second_section" className="py-32 border-t border-b ">
  
  
          <div className="container mx-auto  flex flex-col px-4 space-x-0 space-y-8 md:flex-row md:space-y-0  max-w-6xl text-center">
  
  
  
            <div className="flex flex-col space-y-2  justify-start md:w-1/2 container mx-auto">
  
              <h2 className="text-3xl font-bold  text-center text-black max-w-md md:text-left md:text-4xl ">
                Are you in?
              </h2>
              <h2 className="text-3xl font-bold  text-center text-[#0f7383] max-w-md md:text-left md:text-4xl ">
                Let's get it done.
              </h2>
  
  
            </div>
  
  
            <div className=" md:w-1/2 text-center md:text-end">
  
              <button type="button" class=" bg-[#0f7383] text-white px-8 py-3 rounded-lg hover:bg-[#0a5763] ">
                Get Started
              </button>
  
            </div>
          </div>
  
        </section>
  
  
        {/* footer */}
        <section className="mx-auto dark:bg-gray-800">
  
  
  
          <footer class="px-4  divide-y  dark:text-gray-100">
            <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
              <div class="lg:w-1/3">
                <Link to class="flex justify-center space-x-3 lg:justify-start">
                  <div class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
                      <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                    </svg>
                  </div>
                  <span class="self-center text-2xl font-semibold">Brand name</span>
                </Link>
              </div>
              <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                <div class="space-y-3">
                  <h3 class="tracking-wide uppercase dark:text-gray-50">Product</h3>
                  <ul class="space-y-1">
                    <li>
                      <Link to>Features</Link>
                    </li>
                    <li>
                      <Link to>Integrations</Link>
                    </li>
                    <li>
                      <Link to>Pricing</Link>
                    </li>
                    <li>
                      <Link to>FAQ</Link>
                    </li>
                  </ul>
                </div>
                <div class="space-y-3">
                  <h3 class="tracking-wide uppercase dark:text-gray-50">Company</h3>
                  <ul class="space-y-1">
                    <li>
                      <Link to>Privacy</Link>
                    </li>
                    <li>
                      <Link to>Terms of Service</Link>
                    </li>
                  </ul>
                </div>
                <div class="space-y-3">
                  <h3 class="uppercase dark:text-gray-50">Developers</h3>
                  <ul class="space-y-1">
                    <li>
                      <Link to>Public API</Link>
                    </li>
                    <li>
                      <Link to>Documentation</Link>
                    </li>
                    <li>
                      <Link to>Guides</Link>
                    </li>
                  </ul>
                </div>
                <div class="space-y-3">
                  <div class="uppercase dark:text-gray-50">Social media</div>
                  <div class="flex justify-start space-x-3">
                    <Link to title="Facebook" class="flex items-center p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
                        <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                      </svg>
                    </Link>
                    <Link to title="Twitter" class="flex items-center p-1">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current">
                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                      </svg>
                    </Link>
                    <Link to title="Instagram" class="flex items-center p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 fill-current">
                        <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6 text-sm text-center dark:text-gray-400">© 1968 Company Co. All rights reserved.</div>
          </footer>
  
        </section>
  
  
  
  
      </div>

        )
}