"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

export const ResizableTable = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const TableContent: any = [
    {
      id: "000001",
      firstName: "Lani",
      lastName: "Ovendale",
      email: "lovendale0@w3.org",
      address: "7850 Old Shore Drive",
      country: "United Kingdom",
      university: "University of Plymouth",
      iban: "BG34 MPVP 8782 88EX H1CJ SC",
    },
    {
      id: "000002",
      firstName: "Israel",
      lastName: "Tassell",
      email: "itassell1@ow.ly",
      address: "245 Merchant Circle",
      country: "Macedonia",
      university: "South East European University",
      iban: "FR11 4824 2942 41H9 XBHC 46P2 O86",
    },
    {
      id: "000003",
      firstName: "Eveleen",
      lastName: "Mercer",
      email: "emercer2@ow.ly",
      address: "70700 Kipling Pass",
      country: "Portugal",
      university: "Instituto Superior Novas Profissões - INP",
      iban: "GR96 7559 456P GUAN WTAJ 3VPB S0P",
    },
    {
      id: "000004",
      firstName: "Conn",
      lastName: "Whitley",
      email: "cwhitley3@wsj.com",
      address: "03 Service Terrace",
      country: "Albania",
      university: "Epoka University",
      iban: "LI59 1813 2T7T VKTO 6RKE X",
    },
    {
      id: "000005",
      firstName: "Cherye",
      lastName: "Smitheram",
      email: "csmitheram4@rambler.ru",
      address: "9 Eliot Parkway",
      country: "Indonesia",
      university: "Universitas Mahasaraswati Denpasar",
      iban: "BR27 4570 4226 4255 5239 0197 316T J",
    },
    {
      id: "000006",
      firstName: "Bunnie",
      lastName: "Sked",
      email: "bsked5@51.la",
      address: "03418 Ludington Plaza",
      country: "Nigeria",
      university: "Federal University of Technology, Minna",
      iban: "ES45 6721 1332 3288 6455 1242",
    },
    {
      id: "000007",
      firstName: "Helaine",
      lastName: "Crother",
      email: "hcrother6@opera.com",
      address: "7932 Sloan Park",
      country: "Philippines",
      university: "Saint Ferdinand College",
      iban: "GB50 HFAD 8121 3729 9841 31",
    },
    {
      id: "000008",
      firstName: "Tana",
      lastName: "Ajean",
      email: "tajean7@sfgate.com",
      address: "2 Schurz Junction",
      country: "China",
      university: "Xi'an University of Electronic Science and Technology",
      iban: "KZ85 7422 XDPB P2VQ H8SR",
    },
    {
      id: "000009",
      firstName: "Sollie",
      lastName: "Greenrde",
      email: "sgreenrde8@wikispaces.com",
      address: "055 Mockingbird Way",
      country: "Russia",
      university:
        "St. Petersburg State Mining Institute (Technical University)",
      iban: "CH61 6423 9T4W WP0I 8MUK C",
    },
    {
      id: "000010",
      firstName: "Vernon",
      lastName: "Millington",
      email: "vmillington9@marketwatch.com",
      address: "74 David Pass",
      country: "Portugal",
      university: "Instituto Politécnico de Setúbal",
      iban: "ES71 2390 0665 1601 8072 4924",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -250 }} // Start off-screen
        animate={{ x: isSidebarOpen ? 0 : -250 }} // Toggle based on state
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-gray-800 text-white w-64 p-4 fixed h-full"
      >
        <button
          className="mb-4 p-2 bg-blue-500 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Toggle Sidebar
        </button>
        <ul>
          <li className="my-2">Dashboard</li>
          <li className="my-2">Reports</li>
          <li className="my-2">Settings</li>
        </ul>
      </motion.div>

      {/* Main content */}
      <div
        className={`flex-1 p-6 transition-all duration-500 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {/* Resizable Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">
                  <ResizableBox width={100} height={20} axis="x">
                    <span>ID</span>
                  </ResizableBox>
                </th>
                <th className="py-2 px-4 border-b">
                  <ResizableBox width={150} height={20} axis="x">
                    <span>First Name</span>
                  </ResizableBox>
                </th>
                <th className="py-2 px-4 border-b">
                  <ResizableBox width={150} height={20} axis="x">
                    <span>Last Name</span>
                  </ResizableBox>
                </th>
                <th className="py-2 px-4 border-b">
                  <ResizableBox width={200} height={20} axis="x">
                    <span>Email</span>
                  </ResizableBox>
                </th>
                <th className="py-2 px-4 border-b">
                  <ResizableBox width={200} height={20} axis="x">
                    <span>Address</span>
                  </ResizableBox>
                </th>
                <th className="py-2 px-4 border-b">
                  <ResizableBox width={150} height={20} axis="x">
                    <span>Country</span>
                  </ResizableBox>
                </th>
                <th className="py-2 px-4 border-b">
                  <ResizableBox width={200} height={20} axis="x">
                    <span>University</span>
                  </ResizableBox>
                </th>
                <th className="py-2 px-4 border-b">
                  <ResizableBox width={300} height={20} axis="x">
                    <span>IBAN</span>
                  </ResizableBox>
                </th>
              </tr>
            </thead>
            <tbody>
              {TableContent.map((row: any) => (
                <tr key={row.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b truncate">{row.id}</td>
                  <td className="py-2 px-4 border-b truncate">
                    {row.firstName}
                  </td>
                  <td className="py-2 px-4 border-b truncate">
                    {row.lastName}
                  </td>
                  <td className="py-2 px-4 border-b truncate">{row.email}</td>
                  <td className="py-2 px-4 border-b truncate">{row.address}</td>
                  <td className="py-2 px-4 border-b truncate">{row.country}</td>
                  <td
                    className="py-2 px-4 border-b truncate"
                    title={row.university}
                  >
                    {row.university}
                  </td>
                  <td className="py-2 px-4 border-b truncate">{row.iban}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
