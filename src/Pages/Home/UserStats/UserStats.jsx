import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const UserStats = () => {
  const animate1 = useRef(null);
  const isInView1 = useInView(animate1);
  return (
    <div id="insight" className="bg-[#FFF6EB] pb-6">
      <h3 className="text-3xl font-semibold text-center pt-10">
        Website Stats
      </h3>
      <div className="flex items-center justify-center  ">
        <div className="flex-col items-center justify-center ">
          <div className="flex">
            <div className="flex lg:flex-row flex-col p-4 space-x-4 space-y-4 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
              <div
                ref={animate1}
                style={{
                  transform: isInView1 ? "none" : "translateX(-200px)",
                  opacity: isInView1 ? "1" : "0",
                  transition: "all 1.8s",
                }}
                className="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl md:mt-4"
              >
                <div className="flex-col space-y-2 items-center px-0 md:px-6">
                  <div className="flex items-center justify-between space-x-6">
                    <div className="flex items-center space-x-1 ">
                      <div className="text-lg font-medium text-violet-500">
                        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        Review
                      </div>
                    </div>
                    <div className="text-xs bg-gray-200 px-2 py-0.5 rounded-2xl text-gray-400 font-medium">
                      30 Days
                    </div>
                  </div>
                  <div className="text-3xl font-bold">
                    <CountUp
                      start={0}
                      enableScrollSpy={true}
                      end={156}
                      delay={1}
                      duration={4}
                      separator=" "
                    />
                  </div>
                  <div className="font-bold text-red-500 flex items-center space-x-1">
                    <div className="text-xl">
                      <ion-icon name="trending-down-outline"></ion-icon>
                    </div>
                    <div className="text-sm">2.5% less</div>
                  </div>
                </div>
              </div>
              <div
                ref={animate1}
                style={{
                  transform: isInView1 ? "none" : "scale(0)",
                  opacity: isInView1 ? "1" : "0",
                  transition: "all 1.8s",
                }}
                className="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl"
              >
                <div className="flex-col space-y-2 items-center px-0 md:px-6">
                  <div className="flex items-center justify-between space-x-6">
                    <div className="flex items-center space-x-1 ">
                      <div className="text-lg font-medium text-violet-500">
                        <ion-icon name="briefcase-outline"></ion-icon>
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        Users
                      </div>
                    </div>
                    <div className="text-xs bg-gray-200 px-2 py-0.5 rounded-2xl text-gray-400 font-medium">
                      30 Days
                    </div>
                  </div>
                  <div className="text-3xl font-bold">
                    <CountUp
                      start={0}
                      enableScrollSpy={true}
                      end={127}
                      duration={4}
                      delay={1}
                      separator=" "
                    />
                  </div>
                  <div className="font-bold text-green-500 flex items-center space-x-1">
                    <div className="text-xl">
                      <ion-icon name="trending-up-outline"></ion-icon>
                    </div>
                    <div className="text-sm">4.9% more</div>
                  </div>
                </div>
              </div>
              <div
                ref={animate1}
                style={{
                  transform: isInView1 ? "none" : "translateX(200px)",
                  opacity: isInView1 ? "1" : "0",
                  transition: "all 1.8s",
                }}
                className="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl"
              >
                <div className="flex-col space-y-2 items-center px-0 md:px-6">
                  <div className="flex items-center justify-between space-x-6">
                    <div className="flex items-center space-x-1 ">
                      <div className="text-lg font-medium text-violet-500">
                        <ion-icon name="document-outline"></ion-icon>
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        Tasks
                      </div>
                    </div>
                    <div className="text-xs bg-gray-200 px-2 py-0.5 rounded-2xl text-gray-400 font-medium">
                      30 Days
                    </div>
                  </div>
                  <div className="text-3xl font-bold">
                    <CountUp
                      start={0}
                      enableScrollSpy={true}
                      end={456}
                      delay={1}
                      duration={4}
                      separator=" "
                    />
                  </div>
                  <div className="font-bold text-green-500 flex items-center space-x-1">
                    <div className="text-xl">
                      <ion-icon name="trending-up-outline"></ion-icon>
                    </div>
                    <div className="text-sm">3.7% more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
