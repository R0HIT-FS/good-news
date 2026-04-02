// import React from 'react'
// import EnglishVersion from './english'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"
// import TeluguVersion from './telugu'
// import HindiVersion from './hindi'

// const page = () => {
//   return (
//     <>
//   <Tabs defaultValue="overview" className="w-full">
//       <TabsList>
//         <TabsTrigger value="overview">Good News</TabsTrigger>
//         <TabsTrigger value="analytics">శుభ వార్త</TabsTrigger>
//         <TabsTrigger value="reports">अच्छी खबर</TabsTrigger>
//       </TabsList>
//       <TabsContent value="overview">
//         <Card>
//           <CardHeader>
//             {/* <CardTitle>Good News</CardTitle> */}
//             {/* <CardDescription>
//               View your key metrics and recent project activity. Track progress
//               across all your active projects.
//             </CardDescription> */}
//           </CardHeader>
//           <CardContent className="w-full text-sm text-muted-foreground">
//             <EnglishVersion/>
//           </CardContent>
//         </Card>
//       </TabsContent>
//       <TabsContent value="analytics">
//         <Card>
//           <CardHeader>
//             {/* <CardTitle>శుభ వార్త</CardTitle> */}
//             {/* <CardDescription>
//               Track performance and user engagement metrics. Monitor trends and
//               identify growth opportunities.
//             </CardDescription> */}
//           </CardHeader>
//           <CardContent className="text-sm text-muted-foreground">
//             <TeluguVersion/>
//           </CardContent>
//         </Card>
//       </TabsContent>
//       <TabsContent value="reports">
//         <Card>
//           <CardHeader>
//             {/* <CardTitle>अच्छी खबर</CardTitle> */}
//             {/* <CardDescription>
//               Generate and download your detailed reports. Export data in
//               multiple formats for analysis.
//             </CardDescription> */}
//           </CardHeader>
//           <CardContent className="text-sm text-muted-foreground">
//             <HindiVersion/>
//           </CardContent>
//         </Card>
//       </TabsContent>
//     </Tabs>
//     </>
//   )
// }

// export default page

import React from "react";
import EnglishVersion from "./english";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeluguVersion from "./telugu";
import HindiVersion from "./hindi";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {" "}
      {/* Background from tract styling */}
      <Tabs
        defaultValue="overview"
        className="max-w-4xl mx-auto w-full py-2 px-4 "
      >
        {/* Styled TabsList: Light Gray background */}
        <TabsList className="grid w-full grid-cols-3 bg-[#ecf0f1]  py-2 px-4 mt-2">
          {/* Styled TabsTrigger: 
              - Inactive: Slate Gray text
              - Active: Blue background (#2980b9) with white text
              - Hover: Orange text (#e67e22) 
          */}
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-[#2980b9] data-[state=active]:text-white transition-all hover:text-[#e67e22] py-2 px-4 text-[18px]"
          >
            Good News
          </TabsTrigger>

          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-[#2980b9] data-[state=active]:text-white transition-all hover:text-[#e67e22] py-2 px-4 text-[18px]"
          >
            శుభ వార్త
          </TabsTrigger>

          <TabsTrigger
            value="reports"
            className="data-[state=active]:bg-[#2980b9] data-[state=active]:text-white transition-all hover:text-[#e67e22] py-2 px-4 text-[18px]"
          >
            अच्छी खबर
          </TabsTrigger>
        </TabsList>

        {/* Tab Content styling: Card mimics the .tract-card class */}
        <TabsContent value="overview" className="mt-2">
          <Card className="border-none shadow-xl rounded-xl overflow-hidden bg-white mt-4">
            {/* <CardHeader className="border-b-2 border-[#3498db]/20 pb-4"></CardHeader> */}
            <CardContent className="text-[#2c3e50]">
              <EnglishVersion />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-2">
          <Card className="border-none shadow-xl rounded-xl overflow-hidden bg-white mt-4">
            {/* <CardHeader className="border-b-2 border-[#3498db]/20 pb-4"></CardHeader> */}
            <CardContent className=" text-[#2c3e50]">
              <TeluguVersion />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-2">
          <Card className="border-none shadow-xl rounded-xl overflow-hidden bg-white mt-4">
            {/* <CardHeader className="border-b-2 border-[#3498db]/20 pb-4"></CardHeader> */}
            <CardContent className=" text-[#2c3e50]">
              <HindiVersion />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
