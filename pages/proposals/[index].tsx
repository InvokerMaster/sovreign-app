import Link from "next/link";
import proposals from "../../data/proposals.json";

function index() {
  // const data = proposals[index];
  const percent = 89;

  return (
    <section className="sm:pt-8 md:pt-16 pb-8  bg-gray-100">
      <div className="max-w-6xl mx-auto mb-4 rounded">
        <Link href="/proposals/">
          <div className="flex mb-8 text-gray-500 font-medium text-lg cursor-pointer">
            <svg
              id="icon__arrow-back"
              fill="none"
              viewBox="0 0 16 16"
              className="w-4 mr-2"
            >
              <path
                fill="currentColor"
                d="M7.864 4.53a.75.75 0 10-1.061-1.06l1.06 1.06zM3.804 7.53l.531.53-.53-.53zm0 .942l.531-.53-.53.53zm2.999 4.06a.75.75 0 001.06-1.061l-1.06 1.06zM4 7.25a.75.75 0 000 1.5v-1.5zm8.667 1.5a.75.75 0 000-1.5v1.5zM6.803 3.47L3.274 6.998l1.061 1.06L7.864 4.53 6.803 3.47zM3.274 9.002l3.529 3.528 1.06-1.06L4.336 7.94l-1.06 1.06zm0-2.004a1.417 1.417 0 000 2.004l1.061-1.06a.083.083 0 010 .117l-1.06-1.06zM4 8.75h8.667v-1.5H4v1.5z"
              ></path>
            </svg>
            Proposals
          </div>
        </Link>
        <div className="text-black mb-8 font-medium text-3xl">
          PID-6: 10000 BOND for UMA KPI Option Pilot
        </div>
        <div className="flex">
          <div className="flex-1 flex flex-col">
            <div className="bg-white flex flex-col">
              <div className="p-6 flex justify-between">
                <div className="font-medium text-black text-xl">
                  Votes results
                </div>
                <div className="font-medium text-blue-500 text-xl">
                  View voters
                </div>
              </div>
              <div className="p-6 flex flex-col border-t gap-4">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div className="text-gray-500 font-medium">For</div>
                    <div className="text-xl font-medium">
                      <span className="text-xl font-medium font-medium">
                        634,614.71
                      </span>
                      <span className="text-xl ml-4 text-gray-500">
                        (99.96%)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-500 text-right font-medium">
                      Against
                    </div>
                    <div className="flex">
                      <span className="text-xl font-medium">271.42</span>
                      <span className="text-xl ml-4 text-gray-500">(0%)</span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-2 bg-green-100 rounded overflow-hidden">
                  <div
                    className="h-2 bg-green-500"
                    style={{
                      width: `${percent.toFixed(2)}%`,
                    }}
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col border-t gap-4">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div className="text-gray-500 text-right font-medium flex">
                      Quorum
                      <svg
                        id="icon__info"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-5 ml-2"
                      >
                        <path
                          fill="currentColor"
                          d="M10.313 16.5h.562v-5.625h-.563a.563.563 0 01-.562-.563v-.375c0-.31.252-.562.563-.562h2.25c.31 0 .562.252.562.562V16.5h.563c.31 0 .562.252.562.562v.375c0 .311-.252.563-.563.563h-3.374a.563.563 0 01-.563-.563v-.375c0-.31.252-.562.563-.562zM12 5.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M12 23.2c6.186 0 11.2-5.014 11.2-11.2C23.2 5.815 18.187.8 12 .8 5.816.8.8 5.815.8 12c0 6.186 5.015 11.2 11.2 11.2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-xl">
                      <span className="text-xl font-medium font-medium">
                        43.68%
                      </span>
                      <span className="text-xl ml-4 text-gray-500">
                        (&gt; 40% required)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-gray-500 text-right font-medium flex justify-end">
                      Approval
                      <svg
                        id="icon__info"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-5 ml-2"
                      >
                        <path
                          fill="currentColor"
                          d="M10.313 16.5h.562v-5.625h-.563a.563.563 0 01-.562-.563v-.375c0-.31.252-.562.563-.562h2.25c.31 0 .562.252.562.562V16.5h.563c.31 0 .562.252.562.562v.375c0 .311-.252.563-.563.563h-3.374a.563.563 0 01-.563-.563v-.375c0-.31.252-.562.563-.562zM12 5.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M12 23.2c6.186 0 11.2-5.014 11.2-11.2C23.2 5.815 18.187.8 12 .8 5.816.8.8 5.815.8 12c0 6.186 5.015 11.2 11.2 11.2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex">
                      <span className="text-xl font-medium">99.96%</span>
                      <span className="text-xl ml-4 text-gray-500">
                        (&gt; 60% required)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded bg-white">
              <div className="p-6 font-medium text-lg">Details</div>
              <div className="p-6 border-t flex">
                <div className="flex-1 flex flex-col">
                  <div className="text-gray-500 font-medium">Created by</div>
                  <div className="flex">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDAsMjQwLDI0MCwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDg1LDM4LDEpOyBzdHJva2U6cmdiYSgyMTcsODUsMzgsMSk7IHN0cm9rZS13aWR0aDowLjMyOyc+PHJlY3QgIHg9JzI3JyB5PSc3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzE3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMjcnIHk9JzI3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nMTcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSczNycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PScyNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSczNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzE3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzM3JyB5PSc0Nycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNycgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJy8+PHJlY3QgIHg9JzcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNDcnIHk9JzM3JyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnLz48cmVjdCAgeD0nNycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjxyZWN0ICB4PSc0NycgeT0nNDcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCcvPjwvZz48L3N2Zz4="
                      alt="0x89d652c64d7cee18f5df53b24d9d29d130b18798"
                      width="24"
                      height="24"
                    />
                    <div className="text-blue-500 text-xl font-medium ml-4">
                      0x89d6...8798
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-gray-500 font-medium flex">
                    Creator threshold
                    <svg
                      id="icon__info"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-5 ml-2"
                    >
                      <path
                        fill="currentColor"
                        d="M10.313 16.5h.562v-5.625h-.563a.563.563 0 01-.562-.563v-.375c0-.31.252-.562.563-.562h2.25c.31 0 .562.252.562.562V16.5h.563c.31 0 .562.252.562.562v.375c0 .311-.252.563-.563.563h-3.374a.563.563 0 01-.563-.563v-.375c0-.31.252-.562.563-.562zM12 5.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M12 23.2c6.186 0 11.2-5.014 11.2-11.2C23.2 5.815 18.187.8 12 .8 5.816.8.8 5.815.8 12c0 6.186 5.015 11.2 11.2 11.2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex">
                    <svg
                      id="icon__check-circle-outlined"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="w-5"
                    >
                      <path
                        d="m20 40c11.046 0 20-8.9543 20-20 0-11.046-8.9543-20-20-20-11.046 0-20 8.9543-20 20 0 11.046 8.9543 20 20 20z"
                        fill="currentColor"
                        fillOpacity=".08"
                      ></path>
                      <path
                        d="m27 15.667-8.6262 8.6263c-0.3906 0.3905-1.0237 0.3905-1.4142 0l-3.9596-3.9596"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <div className="text-black text-xl font-medium ml-4">
                      Above 1%
                    </div>
                  </div>
                </div>
                <div className="flex-1"></div>
              </div>
              <div className="p-6 border-t gap-4 flex flex-col">
                <div className="text-gray-500 font-medium">Description</div>
                <div className="text-xl">
                  1. Send 10,000 BOND to
                  0x5A21f270492E55Fec2CC78C627618cAE42295695 for UMA KPI Option
                  Pilot.
                </div>
              </div>
              <div className="p-6 border-t gap-4 flex flex-col">
                <div className="text-gray-500 font-medium">Actions</div>
                <div className="flex bg-gray-100 flex flex-col border">
                  <div className="p-4 flex justify-between">
                    <div className="text-black font-medium">Action 1</div>
                    <div className="text-gray-500 font-medium cursor-pointer">
                      Show function signature
                    </div>
                  </div>
                  <div className="border-t p-4 text-xl">
                    <span className="text-blue-500 font-bold">
                      0x0391...750f
                    </span>
                    .transfer(0x5A21f270492E55Fec2CC78C627618cAE42295695,
                    10000000000000000000000)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 ml-6 flex flex-col">
            <div className="bg-white p-6 flex flex-col gap-6">
              <div className="flex">
                <svg
                  id="icon__history-circle-outlined"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-10 text-blue-500"
                >
                  <path
                    d="m20 40c11.046 0 20-8.9543 20-20 0-11.046-8.9543-20-20-20-11.046 0-20 8.9543-20 20 0 11.046 8.9543 20 20 20z"
                    fill="currentColor"
                    fillOpacity=".08"
                  ></path>
                  <path
                    d="m25 13h-10m10 14h-10m5.2026-7.0507c-0.133 0.0333-0.2722 0.0333-0.4052 0-2.2318-0.5579-3.7974-2.5631-3.7974-4.8635v-1.0858c0-0.5523 0.4477-1 1-1h6c0.5523 0 1 0.4477 1 1v1.0858c0 2.3004-1.5656 4.3056-3.7974 4.8635zm0 0.1014c-0.133-0.0333-0.2722-0.0333-0.4052 0-2.2318 0.5579-3.7974 2.5631-3.7974 4.8635v1.0858c0 0.5523 0.4477 1 1 1h6c0.5523 0 1-0.4477 1-1v-1.0858c0-2.3004-1.5656-4.3056-3.7974-4.8635z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <div className="flex flex-col ml-4">
                  <div className="font-medium text-xl text-black">Voting</div>
                  <div className="font-medium text-gray-500">
                    Ends in about 2 hours
                  </div>
                </div>
              </div>
              <div className="flex">
                <svg
                  id="icon__check-circle-outlined"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-10 text-green-500"
                >
                  <path
                    d="m20 40c11.046 0 20-8.9543 20-20 0-11.046-8.9543-20-20-20-11.046 0-20 8.9543-20 20 0 11.046 8.9543 20 20 20z"
                    fill="currentColor"
                    fillOpacity=".08"
                  ></path>
                  <path
                    d="m27 15.667-8.6262 8.6263c-0.3906 0.3905-1.0237 0.3905-1.4142 0l-3.9596-3.9596"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <div className="flex flex-col ml-4">
                  <div className="font-medium text-xl text-black">Warm-UP</div>
                  <div className="font-medium text-gray-500">
                    Ended at 19 Sep 2021 - 06:37
                  </div>
                </div>
              </div>
              <div className="flex">
                <svg
                  id="icon__check-circle-outlined"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-10  text-green-500"
                >
                  <path
                    d="m20 40c11.046 0 20-8.9543 20-20 0-11.046-8.9543-20-20-20-11.046 0-20 8.9543-20 20 0 11.046 8.9543 20 20 20z"
                    fill="currentColor"
                    fillOpacity=".08"
                  ></path>
                  <path
                    d="m27 15.667-8.6262 8.6263c-0.3906 0.3905-1.0237 0.3905-1.4142 0l-3.9596-3.9596"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <div className="flex flex-col ml-4">
                  <div className="font-medium text-xl text-black flex items-center">
                    <span className="mr-4">Created</span>
                    <a href="#">
                      <svg
                        id="icon__link-outlined"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="w-4 text-gray-500"
                      >
                        <path
                          d="M14.6673 8.99992V11.6666C14.6673 13.3234 13.3242 14.6666 11.6673 14.6666H4.33398C2.67713 14.6666 1.33398 13.3234 1.33398 11.6666V4.33325C1.33398 2.6764 2.67713 1.33325 4.33398 1.33325H7.00065"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M11.334 1.33325L14.534 1.33325V4.53325"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M14.534 1.33325L11.334 4.53325"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="font-medium text-gray-500">
                    17 Sep 2021 - 06:37
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col mt-6">
              <div className="p-6 flex justify-between">
                <div className="font-medium text-black text-xl">Votes</div>
                <div className="font-medium text-blue-500 text-xl">
                  View Voters
                </div>
              </div>
              <div className="p-6 flex flex-col border-t gap-8">
                <div className="flex justify-between">
                  <div className="text-xl font-medium">For</div>
                  <div className="flex">
                    <span className="text-xl font-medium">634,614.71</span>
                    <span className="text-xl ml-4 text-gray-500">(99.96%)</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-green-100 rounded overflow-hidden">
                  <div
                    className="h-2 bg-green-500"
                    style={{
                      width: `${percent.toFixed(2)}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  <div className="text-xl font-medium">Against</div>
                  <div className="flex">
                    <span className="text-xl font-medium">271.42</span>
                    <span className="text-xl ml-4 text-gray-500">(0.04%)</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-red-100 rounded overflow-hidden">
                  <div
                    className="h-2 bg-red-500"
                    style={{
                      width: `${percent.toFixed(2)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 rounded bg-white">
              <div className="p-6 font-medium text-lg">Abrogation proposal</div>
              <div className="p-6 border-t gap-4 flex flex-col">
                <div className="text-xl">
                  This is a special type of proposal, with the following
                  thresholds:
                </div>
                <div className="text-xl">
                  <ul className="list-disc">
                    <li>Acceptance criteria: 50% of staked BOND</li>
                    <li>
                      A proposal can only have one associated abrogation
                      proposal at any given time
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                  <button
                    className="p-4 bg-gray-100 cursor-not-allowed"
                    disabled
                  >
                    <span className="text-gray-500 font-medium">
                      Initiate abrogation proposal
                    </span>
                  </button>
                  <div className="flex items-center justify-around">
                    <span className="text-gray-500 text-sm">
                      You are not able to abrogate proposal.
                    </span>
                    <span className="text-blue-500 font-medium cursor-pointer">
                      See Why
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
