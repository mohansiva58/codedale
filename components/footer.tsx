"use client"
import { Github, Linkedin, Instagram, Twitter } from "lucide-react"
// Assuming SiteFooter is the main layout component you want to render
// We will define it here to match the image structure.
// Note: The Twitter icon is used for "X" to match modern libraries.

// --- Icon Definitions ---

// Using the Twitter icon from Lucide for the 'X' social link.
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <Twitter {...props} className="w-4 h-4" />
);

// --- Data Structures (Unchanged) ---
const navItems = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "Achievements", href: "#achievements" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
]

// The social links data structure is updated to use the imported Lucide icons
// for consistency, replacing the custom SVG for 'X'.
const socialLinks = [
    {
        icon: TwitterIcon,
        href: "#",
        label: "X",
    },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
]

// --- SiteFooter Component Implementation ---

// This component uses a placeholder for the background image (bg-codedale-footer)
// and styles the content to match the visual layout of the image provided.
export function SiteFooter() {
    return (
        // The main container simulates the blue/grey background image with pattern
        // The background image class (bg-codedale-footer) must be defined in your Tailwind config.
        <footer className="relative text-white/90 bg-[#5A87B2] overflow-hidden" style={{
            // This inline style simulates the soft, patterned background from the image.
            backgroundImage: "url(/path/to/codedale-footer-bg.jpg)", // REPLACE with actual path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',
            backgroundColor: 'rgba(90, 135, 178, 0.85)', // Dark blue overlay
        }}>
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[1px]"></div>

            <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
                {/* Top Section: Logo, Links, Newsletter */}
                <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-12">

                    {/* Column 1: Logo & Description */}
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            {/* Placeholder for CodeDale Logo/Icon */}
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM10 9H8v6h2V9zm4 0h-2v6h2V9z" />
                            </svg>
                            <span className="text-xl font-bold text-white">CodeDale</span>
                        </div>
                        <p className="mt-2 text-sm text-white/70 max-w-xs">
                            Strategic web design, and campaigns tailored to drive result and conversions.
                        </p>
                    </div>

                    {/* Column 2: Company/Navigation Links */}
                    <div className="col-span-1">
                        <h3 className="text-base font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="text-sm text-white/70 hover:text-white transition duration-200">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Socials (Text Links) - Matches image structure */}
                    <div className="col-span-1">
                        <h3 className="text-base font-semibold text-white mb-4">Socials</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-white/70">
                                <a href="#" className="hover:text-white transition duration-200">Email ↗</a>
                            </li>
                            {/* Only displaying LinkedIn text link here to match image */}
                            <li className="text-sm text-white/70">
                                <a href="#" className="hover:text-white transition duration-200">LinkedIn ↗</a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 4/5: Newsletter and Social Icons */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-8">
                        {/* Newsletter Block */}
                        <div>
                            <h3 className="text-base font-semibold text-white mb-4">Newsletter</h3>
                            <p className="mt-2 text-sm text-white/70 max-w-xs">
                                Stay ahead with design & marketing tips and strategies that drive results.
                            </p>
                            <form className="mt-4 flex max-w-sm">
                                <div className="relative w-full">
                                    <input
                                        type="email"
                                        placeholder="Enter your email..."
                                        className="w-full rounded-l-lg border-none bg-white/10 py-2.5 pl-4 pr-10 text-sm text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-400"
                                    />
                                    {/* Small arrow inside the input, matching the image */}
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 text-xs">
                                        ↗
                                    </span>
                                </div>
                                <button
                                    type="submit"
                                    className="rounded-r-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition duration-200"
                                >
                                    {/* The blue button with the email icon from the image */}
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Social Icons (Grouped below Newsletter in the image) */}
                        <div>
                            <ul className="flex space-x-4">
                                {socialLinks.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="text-white/70 hover:text-white transition duration-200 flex items-center space-x-1 group">
                                            <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition duration-200">
                                                <link.icon className="w-4 h-4" />
                                            </div>
                                            {/* Link text next to icon, matching the image */}
                                            <span className="text-sm hidden sm:inline">{link.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Copyright and Legal Links */}
                <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p className="text-white/50 mb-4 md:mb-0">
                        ©{new Date().getFullYear()} CodeDale All rights reserved
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-white/50 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-white/50 hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


// --- Main Export Component (Unchanged structure) ---
export function Footer() {
    return <SiteFooter />
}