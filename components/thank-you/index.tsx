import Image from "next/image"

const ThankYou = () => {
    return (
            <div className="gap-8 flex flex-col items-center justify-center">
            <Image src={"/svgs/icon-thank-you.svg"} alt="Thank You" height={80} width={80} />

            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800">Thank you!</h1>
                <p className="text-center text-base px-3">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>

        </div>
    )
}

export default ThankYou