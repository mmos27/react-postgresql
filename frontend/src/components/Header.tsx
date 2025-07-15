// components/MyComponent.tsx

'use client'
import "tailwindcss";

export function Header() {
    return (
        <div>
            <p className="text-white bg-indigo-500 border-0 py-2 px-6 rounded text-xl">
                釣り情報集計ツール
            </p>
        </div>
    );
}
