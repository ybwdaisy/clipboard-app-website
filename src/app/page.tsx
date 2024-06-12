'use client';
import { useState } from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, ClipboardDocumentListIcon, WindowIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel } from '@headlessui/react'

const navigation = [
  { name: 'Terms of Use', href: 'https://ybwdaisy.github.io/clipboard-app/terms-of-use' },
  { name: 'Privacy Policy', href: 'https://ybwdaisy.github.io/clipboard-app/privacy-policy' },
]

const features = [
  {
    name: 'Copy From Any App',
    description:
      'Clipboards support share extension and action extension, your can share text content or image to Clipboards by share menu.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Paste with Keyboard',
    description:
      'Clipboards support keyboard extension, so your can get your copied content ready to paste wherever you type.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Background Mode',
    description:
      'Clipboards can listen clipboard in background, turn it on will start a Picture in Picture window, your can copy content or image from any apps and save to Clipboards.',
    icon: WindowIcon,
  },
  {
    name: 'Sync Across Devices',
    description:
      'With instant iCloud sync, you can access all your copied content or image at any time from your iPhone or iPad.',
    icon: CloudArrowUpIcon,
  },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <img
              className="h-8 w-auto"
              src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cb/ed/b0/cbedb0ea-f78e-742c-2fc3-af585c3e16f9/AppIcon-1x_U007epad-0-85-220-0.jpeg/460x0w.webp"
              alt=""
            />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://apps.apple.com/app/id6448028046"
              target="_blank"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Download
            </a>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Clipboard Manager</span>
                <img
                  className="h-8 w-auto"
                  src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cb/ed/b0/cbedb0ea-f78e-742c-2fc3-af585c3e16f9/AppIcon-1x_U007epad-0-85-220-0.jpeg/460x0w.webp"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {[...navigation, {
                    name: 'Download',
                    href: 'https://apps.apple.com/app/id6448028046',
                  }].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Clipboard Manager
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {`Clipboard stores everything you copy on your iPhone and iPad, so it's always there whenever you need it again.`}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <footer className="mt-5 mb-10 mx-auto w-full max-w-container justify-center px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm leading-6 text-slate-500">
          <a href="https://beian.miit.gov.cn" target="_blank" className="underline">
            京ICP备2024071281号
          </a>
        </p>
      </footer>
    </div>
  )
}
