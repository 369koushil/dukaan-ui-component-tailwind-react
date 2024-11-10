import React from "react";

function Table() {
  return (
    <table className="max-md:overflow-x-scroll">
      <thead>
        <tr>
          <th scope="col" class="px-16 py-3 font-medium">
            Order ID
          </th>
          <th scope="col" class="px-16 py-3 font-medium">
            Status
          </th>
          <th scope="col" class="px-16 py-3 font-medium">
            Transcation ID
          </th>
          <th scope="col" class="px-16 py-3 font-medium">
            Refund Date
          </th>
          <th scope="col" class="px-28 py-3 font-medium">
            Order Amount
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281209
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495747</td>
          <td class="px-16 py-4 text-black-400">Today, 08:45 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹1,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281194
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495774</td>
          <td class="px-16 py-4 text-black-400">8 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹1,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281195
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>Failed
          </td>
          <td class="px-16 py-4 text-black-400">131634495776</td>
          <td class="px-16 py-4 text-black-400">9 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹8,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281196
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495797</td>
          <td class="px-16 py-4 text-black-400">9 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹995.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281197
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495745</td>
          <td class="px-16 py-4 text-black-400">9 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹2,344.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281198
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>Failed
          </td>
          <td class="px-16 py-4 text-black-400">131634495756</td>
          <td class="px-16 py-4 text-black-400">10 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹11,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281128
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>Failed
          </td>
          <td class="px-16 py-4 text-black-400">131634495799</td>
          <td class="px-16 py-4 text-black-400">11 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹1,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281399
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131600495787</td>
          <td class="px-16 py-4 text-black-400">10 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹2,205.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #289901
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-red-500"></div>Failed
          </td>
          <td class="px-16 py-4 text-black-400">131784495734</td>
          <td class="px-16 py-4 text-black-400">11 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹8,925.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281903
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131639995723</td>
          <td class="px-16 py-4 text-black-400">12 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹1,100.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281703
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495713</td>
          <td class="px-16 py-4 text-black-400">13 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹1,025.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281903
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495798</td>
          <td class="px-16 py-4 text-black-400">14 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹9,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #291203
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495731</td>
          <td class="px-16 py-4 text-black-400">15 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹6,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #251203
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495759</td>
          <td class="px-16 py-4 text-black-400">16 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹1,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281203
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131634495700</td>
          <td class="px-16 py-4 text-black-400">17 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹2,125.00</td>
        </tr>
      </tbody>
      <tbody>
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-16 py-4 font-medium text-blue-700 whitespace-nowrap"
          >
            #281203
          </th>
          <td class="px-16 py-4 flex items-center gap-2 text-black-600">
            <div class="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            Successful
          </td>
          <td class="px-16 py-4 text-black-400">131637795792</td>
          <td class="px-16 py-4 text-black-400">18 Nov 2024, 3:00 PM</td>
          <td class="px-28 py-4 text-right text-black-600">₹5,125.00</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
