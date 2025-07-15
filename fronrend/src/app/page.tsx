// app/page.tsx

import { Header } from "@/components/Header";
import { InputComp } from "@/components/InputComp";
import React from "react";
import "tailwindcss";

export default function Home() {
	return (
		<div className="p-2">
			<div>
				<React.Fragment>
					<Header />
					<InputComp />
				</React.Fragment>
			</div>
		</div>
	);
}