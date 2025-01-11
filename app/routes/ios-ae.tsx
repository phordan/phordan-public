import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import BubbleBento from "~/components/bubble-bento";
import { CodeBlock } from "~/components/code-block";
import { ArrowLeft } from "lucide-react";
import PropCodeCombo, { codeComboProps } from "~/components/docs/prop-code-combo";

export const meta: MetaFunction = () => {
  return [
    { title: "Phordan – Mograph, AE, Music and more" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const exampleCode = `
w = effect("Squircle")("Width");
h = effect("Squircle")("Height");
`



export default function Index() {
  return (
    <div className="flex flex-col items-center justify-start bg-linear-180 from-gray-50 to-gray-500 from-[270px]">
      <Link to="/" className="flex items-center font-medium text-gray-600 text-center bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-400 transition px-4 py-2 rounded-md text-lg mt-8"><ArrowLeft className="mr-2 w-5 h-5" />Back</Link>
        <BubbleBento />
      <div className=" pb-4 sm:pb-6 w-full md:max-w-6xl md:px-4">
          <div className="bg-gray-800 md:rounded-xl overflow-hidden md:border md:border-gray-700/69 ring-inset md:ring-2 ring-0 md:ring-gray-50/20">
          <div className="bg-gray-950/50 border-b border-gray-400/30 shadow-lg text-white text-center text-3xl font-light py-3">
            Controls and Overview
          </div>
          <h2 className="text-white text-center text-2xl  py-3">Essential Properties</h2>
          {entries.map((entry, index) => (
            <PropCodeCombo
              key={index}
              title={entry.title}
              description={entry.description}
              codeTitle={entry.codeTitle}
              code={entry.code}
            />
          ))} 
        

          <div className="px-10 border-b border-y-gray-500/20 bg-gray-900/43 py-3">
            <h3 className="text-white text-3xl font-light py-1">Message Type</h3>
            <div className="p-4">
              <CodeBlock
                code={exampleCode}
                language="jsx"
                filename="property"
              />
            </div>
          </div>
          <div className="px-10 border-b border-y-gray-500/20 bg-gray-900/43 py-3">
            <h3 className="text-white text-3xl font-light py-1">Show Tail</h3>
            <div className="p-4">
              <CodeBlock
                code={exampleCode}
                language="jsx"
                filename="property"
              />
            </div>
          </div>
          <div className="px-10  bg-gray-900/43 py-3">
            <h3 className="text-white text-3xl font-light py-1">Message Type</h3>
            <div className="p-4">
              <CodeBlock
                code={exampleCode}
                language="jsx"
                filename="property"
              />
            </div>
          </div>
  
            <div className="bg-gray-950/50 border-y border-gray-400/30 shadow-lg text-white text-center text-3xl font-light py-3">
              Layer & Expressions Breakdown
            </div>
          <div className="text-sky-100 text-center text-2xl italic font-light py-10">Message Bubble Layer</div>
          <div className="px-10 border-y border-y-gray-500/20 bg-gray-900/43 py-3">
            <h3 className="text-white text-3xl font-light py-1">Contents → Bubble → <span className="font-medium text-violet-300">Path</span></h3>
            <div className="p-4">
              <CodeBlock
                code={exampleCode}
                language="jsx"
                filename="Path"
              />
            </div>
          </div>
          </div>
        </div>

      </div>
  );
}


const entries: codeComboProps[] = [{
  title: "Message Text Content",
  description: "The text content of the message bubble.",
  codeTitle: "Property",
  code: `
	hello
	this is it lol`
}];