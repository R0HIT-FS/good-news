import React from "react";
import EnglishVersion from "./english";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeluguVersion from "./telugu";
import HindiVersion from "./hindi";

// const Page = () => {
//   return (
//     <div className="min-h-screen bg-[#0f172a]"> {/* Dark background */}
//       <Tabs defaultValue="overview" className="max-w-4xl mx-auto w-full py-2 px-4">

//         {/* TabsList */}
//         <TabsList className="grid w-full grid-cols-3 bg-transparent py-2 px-4 mt-2 rounded-lg">

//           <TabsTrigger
//             value="overview"
//             className="data-[state=active]:bg-[#3b82f6] data-[state=active]:text-white data-[state=active]:font-bold text-gray-300 hover:text-orange-400 transition-all py-2 px-4 text-[18px]"
//           >
//             Good News
//           </TabsTrigger>

//           <TabsTrigger
//             value="analytics"
//             className="data-[state=active]:bg-[#3b82f6] data-[state=active]:text-white data-[state=active]:font-bold text-gray-300 hover:text-orange-400 transition-all py-2 px-4 text-[18px]"
//           >
//             శుభ వార్త
//           </TabsTrigger>

//           <TabsTrigger
//             value="reports"
//             className="data-[state=active]:bg-[#3b82f6] data-[state=active]:text-white data-[state=active]:font-bold text-gray-300 hover:text-orange-400 transition-all py-2 px-4 text-[18px]"
//           >
//             शुभ संदेश
//           </TabsTrigger>
//         </TabsList>

//         {/* English */}
//         <TabsContent value="overview" className="mt-2">
//           <Card className="border border-gray-700 shadow-lg rounded-xl overflow-hidden bg-[#1e293b] mt-4">
//             <CardContent className="text-gray-200">
//               <EnglishVersion/>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Telugu */}
//         <TabsContent value="analytics" className="mt-2">
//           <Card className="border border-gray-700 shadow-lg rounded-xl overflow-hidden bg-[#1e293b] mt-4">
//             <CardContent className="text-gray-200">
//               <TeluguVersion/>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Hindi */}
//         <TabsContent value="reports" className="mt-2">
//           <Card className="border border-gray-700 shadow-lg rounded-xl overflow-hidden bg-[#1e293b] mt-4">
//             <CardContent className="text-gray-200">
//               <HindiVersion/>
//             </CardContent>
//           </Card>
//         </TabsContent>

//       </Tabs>
//     </div>
//   )
// }

// export default Page

const Page = () => {
  return (
    <div className="min-h-screen bg-[#020617]">
      {" "}
      {/* deeper dark */}
      <Tabs
        defaultValue="overview"
        className="max-w-4xl mx-auto w-full py-2 px-4"
      >
        <TabsList className="grid w-full grid-cols-3 bg-transparent py-2 px-4 mt-2 rounded-lg">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-[#31363F] data-[state=active]:text-white data-[state=active]:font-semibold text-gray-300 hover:text-[#76ABAE] focus:outline-none focus:ring-2 focus:ring-[#76ABAE] transition-all py-2 px-4 text-[18px]"
          >
            Good News
          </TabsTrigger>

          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-[#31363F] data-[state=active]:text-white data-[state=active]:font-semibold text-gray-300 hover:text-[#76ABAE] focus:outline-none focus:ring-2 focus:ring-[#76ABAE] transition-all py-2 px-4 text-[18px]"
          >
            శుభ వార్త
          </TabsTrigger>

          <TabsTrigger
            value="reports"
            className="data-[state=active]:bg-[#31363F] data-[state=active]:text-white data-[state=active]:font-semibold text-gray-300 hover:text-[#76ABAE] focus:outline-none focus:ring-2 focus:ring-[#76ABAE] transition-all py-2 px-4 text-[18px]"
          >
            शुभ संदेश
          </TabsTrigger>
        </TabsList>

        {/* English */}
        <TabsContent value="overview" className="mt-2">
          <Card className="border border-gray-700 shadow-md rounded-xl overflow-hidden bg-[#31363F] mt-4">
            <CardContent className="text-gray-100">
              <EnglishVersion />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Telugu */}
        <TabsContent value="analytics" className="mt-2">
          <Card className="border border-gray-700 shadow-md rounded-xl overflow-hidden bg-[#31363F] mt-4">
            <CardContent className="text-gray-100">
              <TeluguVersion />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Hindi */}
        <TabsContent value="reports" className="mt-2">
          <Card className="border border-gray-700 shadow-md rounded-xl overflow-hidden bg-[#31363F] mt-4">
            <CardContent className="text-gray-100">
              <HindiVersion />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
