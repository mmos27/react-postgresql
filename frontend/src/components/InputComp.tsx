// components/MyComponent.tsx
'use client'
import React, { useState } from 'react';

// 入力データの型定義
type InputValues = {
	place: string;
	time: string;
	tide: string;
	moonPhase: string;
	weather: string;
	fishSize: string;
	fishSpecies: string;
	lureColor: string;
	lureSize: string;
	luretype: string;
};

// 入力欄のprops型定義
type InputFormProps = {
	displayName: string;
	inputName: keyof InputValues;
	inputValue: string;
	inputEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputComp() {
	const [inputValues, setInputValues] = useState<InputValues>({
		place: '',
		time: '',
		tide: '',
		moonPhase: '',
		weather: '',
		fishSize: '',
		fishSpecies: '',
		lureColor: '',
		lureSize: '',
		luretype: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<React.Fragment>
			<div className="grid grid-cols-8">
				{/* 環境 */}
				<div className="grid col-start-1 col-span-2">
					<InputForm displayName="場所" inputName="place" inputValue={inputValues.place} inputEvent={handleChange} />
					<InputForm displayName="時間" inputName="time" inputValue={inputValues.time} inputEvent={handleChange} />
				</div>
				<div className="grid col-start-3 col-span-2">
					<InputForm displayName="潮" inputName="tide" inputValue={inputValues.tide} inputEvent={handleChange} />
					<InputForm displayName="天気" inputName="weather" inputValue={inputValues.weather} inputEvent={handleChange} />
				</div>

				{/* 魚情報 */}
				<div className="grid col-start-5 col-span-2">
					<InputForm displayName="サイズ" inputName="fishSize" inputValue={inputValues.fishSize} inputEvent={handleChange} />
					<InputForm displayName="魚種" inputName="fishSpecies" inputValue={inputValues.fishSpecies} inputEvent={handleChange} />
				</div>

				{/* ルアー情報 */}
				<div className="grid col-start-7 col-span-2">
					<InputForm displayName="ルアーの色" inputName="lureColor" inputValue={inputValues.lureColor} inputEvent={handleChange} />
					<InputForm displayName="サイズ" inputName="lureSize" inputValue={inputValues.lureSize} inputEvent={handleChange} />
				</div>
			</div>

			{/* 入力内容表示 */}
			<div className="mt-12 space-y-1">
				<p>{inputValues.place}</p>
				<p>{inputValues.time}</p>
				<p>{inputValues.tide}</p>
				<p>{inputValues.weather}</p>
				<p>{inputValues.fishSize}</p>
				<p>{inputValues.fishSpecies}</p>
				<p>{inputValues.lureColor}</p>
				<p>{inputValues.lureSize}</p>
			</div>

			<div className="mt-12">
				<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
					ボタン
				</button>
			</div>
		</React.Fragment>
	);
}

// 入力欄コンポーネント
const InputForm: React.FC<InputFormProps> = ({ displayName, inputName, inputValue, inputEvent }) => {
	return (
		<label className="text-black flex items-center space-x-2 mt-4">
			<span className="w-20">{displayName}</span>
			<input
				className="rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				type="text"
				name={inputName}
				value={inputValue}
				onChange={inputEvent}
			/>
		</label>
	);
};
