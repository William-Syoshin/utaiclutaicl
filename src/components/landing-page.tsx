'use client'

import { Button } from "@/components/ui/button"
import { Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
      <div className="bg-black bg-opacity-50 min-h-screen flex flex-col">
        <header className="bg-blue-900 bg-opacity-80 text-white py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">UT AI Creative Lab</h1>
            <p className="text-xl">UTAICL</p>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <section className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">活動内容</h2>
            <p className="text-gray-800 leading-relaxed">
              東大初の画像・動画・音楽AI特化型サークル。2024年設立。第一回AIアートグランプリ受賞者が発足。
              情報共有のほか、不定期で勉強会・交流会、イベント、タテカン制作などを行います。
              他大生、院生も大歓迎！
            </p>
          </section>

          <section className="text-center bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">SNS</h2>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline" className="bg-white bg-opacity-50 hover:bg-opacity-75 transition-all">
                <Link href="https://www.instagram.com/ut_ai_creative_lab/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" /> Instagram
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white bg-opacity-50 hover:bg-opacity-75 transition-all">
                <Link href="https://x.com/utaicl" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-4 w-4" /> X (Twitter)
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="bg-blue-900 bg-opacity-80 py-4 mt-auto">
          <div className="container mx-auto px-4 text-center text-white">
            &copy; 2024 UT AI Creative Lab. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}