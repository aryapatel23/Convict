import React from "react"

const stats = [
    { id: 1, name: 'Companies hiring', value: '300+' },
    { id: 2, name: 'Active people', value: '50K+' },
    { id: 3, name: 'New opning everyday', value: '4000+' },
    // { id: 3, name: 'New opning everyday', value: '4000+' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-6 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }




  // import React from "react";

  // const stats = [
  //   { id: 1, name: "Companies hiring", value: "300+" },
  //   { id: 2, name: "Active people", value: "50K+" },
  //   { id: 3, name: "New openings every day", value: "4000+" },
  // ];
  
  // export default function Stats() {
  //   return (
  //     <div className="flex justify-center items-center bg-white py-24 sm:py-32">
  //       <div className="mx-auto max-w-7xl px-6 lg:px-8">
  //         <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 place-items-center">
  //           {stats.map((stat) => (
  //             <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
  //               <dt className="text-base text-gray-600">{stat.name}</dt>
  //               <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
  //                 {stat.value}
  //               </dd>
  //             </div>
  //           ))}
  //         </dl>
  //       </div>
  //     </div>
  //   );
  // }
  