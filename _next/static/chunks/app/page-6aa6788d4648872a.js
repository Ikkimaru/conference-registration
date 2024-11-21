(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2420:(e,s,t)=>{Promise.resolve().then(t.bind(t,7479))},7479:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(5155),n=t(2115);let l=e=>{let{onFormSubmit:s}=e,[t,l]=(0,n.useState)(""),[a,o]=(0,n.useState)(""),[c,d]=(0,n.useState)("");return(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s({name:t,email:a,comments:c,checkInNumber:Math.floor(1e4*Math.random())}),l(""),o(""),d("")},className:"mt-6 space-y-4 max-w-md mx-auto bg-foreground p-6 shadow-md rounded",children:[(0,r.jsx)("input",{type:"text",placeholder:"Full Name",className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600",value:t,onChange:e=>l(e.target.value),required:!0}),(0,r.jsx)("input",{type:"email",placeholder:"Email Address",className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600",value:a,onChange:e=>o(e.target.value),required:!0}),(0,r.jsx)("textarea",{placeholder:"Comments or Questions (Optional)",className:"w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600",value:c,onChange:e=>d(e.target.value),rows:4}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-foreground py-3 rounded font-semibold hover:bg-blue-700",children:"Submit Registration"})]})};function a(){let[e,s]=(0,n.useState)([]);return(0,n.useEffect)(()=>{s(JSON.parse(localStorage.getItem("registrants")||"[]"))},[]),(0,r.jsxs)("div",{className:"min-h-screen bg-background flex flex-col items-center",children:[(0,r.jsx)("header",{className:"w-full bg-blue-600 text-foreground py-8 px-4",children:(0,r.jsxs)("div",{className:"max-w-7xl mx-auto text-center",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold",children:"Annual Tech Conference 2024"}),(0,r.jsx)("p",{className:"mt-4 text-lg",children:"Join us for an unforgettable day of learning, networking, and innovation!"}),(0,r.jsx)("a",{href:"#register",className:"inline-block mt-6 px-8 py-3 bg-gray-500 text-white rounded shadow-md font-semibold hover:bg-gray-200 hover:text-blue-600",children:"Register"})]})}),(0,r.jsxs)("main",{className:"flex-1 w-full max-w-7xl mx-auto px-4 py-8 space-y-16",children:[(0,r.jsxs)("section",{id:"details",className:"text-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-semibold text-foreground",children:"Conference Details"}),(0,r.jsx)("p",{className:"mt-4 text-foreground",children:"The Annual Tech Conference 2024 brings together industry leaders, developers, and enthusiasts to discuss the latest in technology and innovation."}),(0,r.jsxs)("div",{className:"mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6",children:[(0,r.jsxs)("div",{className:"p-4 border rounded shadow-sm bg-foreground",children:[(0,r.jsx)("h3",{className:"font-bold text-xl text-blue-600",children:"When"}),(0,r.jsx)("p",{className:"text-background",children:"March 15, 2024"})]}),(0,r.jsxs)("div",{className:"p-4 border rounded shadow-sm bg-foreground",children:[(0,r.jsx)("h3",{className:"font-bold text-xl text-blue-600",children:"Where"}),(0,r.jsx)("p",{className:"text-background",children:"San Francisco, CA"})]}),(0,r.jsxs)("div",{className:"p-4 border rounded shadow-sm bg-foreground",children:[(0,r.jsx)("h3",{className:"font-bold text-xl text-blue-600",children:"Who"}),(0,r.jsx)("p",{className:"text-background",children:"Tech enthusiasts of all levels"})]})]})]}),(0,r.jsxs)("section",{id:"register",className:"text-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-semibold text-foreground",children:"Register Now"}),(0,r.jsx)(l,{onFormSubmit:t=>{let r=[...e,t];localStorage.setItem("registrants",JSON.stringify(r)),s(r)}})]}),(0,r.jsxs)("section",{id:"registrants",className:"text-center mt-8",children:[(0,r.jsx)("h2",{className:"text-3xl font-semibold text-foreground",children:"Registered Attendees"}),(0,r.jsx)("ul",{className:"mt-4",children:0===e.length?(0,r.jsx)("p",{children:"No one has registered yet."}):e.map((e,s)=>(0,r.jsxs)("li",{className:"p-4 border rounded shadow-sm bg-foreground",children:[(0,r.jsx)("p",{className:"font-bold text-blue-600",children:e.name}),(0,r.jsx)("p",{className:"text-background",children:e.email}),e.comments&&(0,r.jsx)("p",{className:"text-background italic",children:e.comments}),(0,r.jsxs)("p",{className:"text-background",children:["Check-in Number: ",e.checkInNumber]})]},s))})]}),(0,r.jsxs)("section",{id:"contact",className:"text-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-semibold text-foreground",children:"Contact Us"}),(0,r.jsxs)("p",{className:"mt-4 text-foreground",children:["Have questions? Reach out to us at"," ",(0,r.jsx)("a",{href:"mailto:info@techconference2024.com",className:"text-blue-600 underline",children:"info@techconference2024.com"}),"."]})]})]}),(0,r.jsx)("footer",{className:"w-full bg-gray-800 text-foreground py-4 text-center",children:(0,r.jsx)("p",{children:"\xa9 2024 Tech Conference. All rights reserved."})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[441,517,358],()=>s(2420)),_N_E=e.O()}]);