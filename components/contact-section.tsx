import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="relative py-20">
      {/* Background Image - pic5 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic5.png"
          alt="Desert terrain with vehicle"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">LET'S BUILD THE FUTURE OF COMBAT SIMULATION</h2>
            <p className="text-lg mb-4">
              Join us in creating the next generation of tactical simulation experiences. Whether you're a developer,
              military expert, or enthusiast, we want to hear from you.
            </p>
          </div>

          <div className="md:w-1/2 md:pl-10">
            <div className="bg-black/70 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <Input type="text" placeholder="Name" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div>
                  <Input type="text" placeholder="Subject" className="bg-gray-800 border-gray-700 text-white" />
                </div>
                <div>
                  <Textarea placeholder="Message" className="bg-gray-800 border-gray-700 text-white" rows={4} />
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
