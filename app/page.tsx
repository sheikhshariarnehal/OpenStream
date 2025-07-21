"use client"

import { Download, Zap, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const handleAppDownload = () => {
    window.open("https://cloudstream-apk.com/wp-content/uploads/2025/04/4.5.2_(cloudstream-apk.com).apk", "_blank")
  }

  const handleRepoInstall = () => {
    window.location.href = "cloudstreamrepo://raw.githubusercontent.com/nehalDIU/nehal-CloudStream/master/repo.json"
  }

  const copyRepoUrl = () => {
    navigator.clipboard.writeText("https://raw.githubusercontent.com/nehalDIU/nehal-CloudStream/master/repo.json")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600/20 text-purple-200 border-purple-400/30 text-sm px-4 py-2">
              🎌 Free Anime Streaming
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Stream Unlimited
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Anime Content
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Download the app and connect our repository in seconds. Access thousands of anime series and movies with
              high-quality streaming.
            </p>

            {/* Main CTAs */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Step 1: Download App</h3>
                  <p className="text-blue-100 mb-6 text-sm">Get the latest Cloudstream APK</p>
                  <Button
                    onClick={handleAppDownload}
                    className="w-full bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3"
                  >
                    Download APK
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Step 2: Connect Repo</h3>
                  <p className="text-purple-100 mb-6 text-sm">One-click repository installation</p>
                  <Button
                    onClick={handleRepoInstall}
                    className="w-full bg-white text-purple-700 hover:bg-gray-100 font-semibold py-3"
                  >
                    Install Repo
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-gray-300 text-sm">Anime Titles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">HD Quality</div>
                <div className="text-gray-300 text-sm">Streaming</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Free</div>
                <div className="text-gray-300 text-sm">Forever</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Setup Guide */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Get Started in 60 Seconds</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  1
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Download & Install</h3>
                <p className="text-gray-300 text-sm">Download the APK and enable "Unknown Sources" to install</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  2
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Connect Repository</h3>
                <p className="text-gray-300 text-sm">Tap "Install Repo" button to automatically add our content</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white">
                  3
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Start Streaming</h3>
                <p className="text-gray-300 text-sm">Browse and enjoy unlimited anime content instantly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Repository?</h2>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Premium Quality</h3>
                  <p className="text-gray-300 text-sm">HD and 4K streaming options</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Fast Servers</h3>
                  <p className="text-gray-300 text-sm">Multiple high-speed sources</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Download className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Offline Viewing</h3>
                  <p className="text-gray-300 text-sm">Download for later watching</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Safe & Secure</h3>
                  <p className="text-gray-300 text-sm">No ads, no malware</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Installation */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Alternative Installation Method</h2>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Manual Repository URL</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  If the direct install doesn't work, copy this URL and add it manually in Cloudstream settings:
                </p>

                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400 text-sm break-all">
                    https://raw.githubusercontent.com/nehalDIU/nehal-CloudStream/master/repo.json
                  </code>
                </div>

                <Button
                  onClick={copyRepoUrl}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  Copy Repository URL
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Streaming?</h2>
            <p className="text-gray-300 mb-8">Join thousands of users enjoying unlimited anime content</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleAppDownload}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>

              <Button
                onClick={handleRepoInstall}
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4"
              >
                <Zap className="mr-2 h-5 w-5" />
                Install Repository
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-4">Free anime streaming repository for Cloudstream</p>
          <p className="text-gray-500 text-xs">
            This is an unofficial repository. Users are responsible for compliance with local laws.
          </p>
        </div>
      </footer>
    </div>
  )
}
