const productLinks = ["Home", "Technologies", "Projects"];
const companyLinks = ["About", "Contact", "Careers"];
const legalLinks = ["Privacy Policy", "Terms of Service"];

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div className="md:col-span-1">
                        <div className="flex items-centergap-2 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-sm">
                                DS
                            </div>
                            <span className="font-bold text-lg text-gray-900">
                                Dev<span className="bg-brand-gradient bg-clip-text text-transparent">Stack</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex gap-4 text-sm font-medium text-gray-600">
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 tracking-wide mb-4">PRODUCT</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-500">
                            {productLinks.map((link) => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 tracking-wide mb-4">COMPANY</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-500">
                            {companyLinks.map((link) => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold text-gray-900 tracking-wide mb-4">LEGAL</h4>
                        <ul className="flex flex-col gap-3 text-sm text-gray-500">
                            {legalLinks.map((link) => (
                                <li key={link}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}