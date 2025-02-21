import ProfileInfoForm from "./form";

const ProfileInformation = () => {
	return (
		<div className="w-full h-full flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<h1 className="font-bold text-4xl">Personal Info</h1>
				<p className="text-base">
					Please provide your name, email address, and phone number.
				</p>
			</div>
			<div className="h-full py-6 relative">
				<ProfileInfoForm />
			</div>
		</div>
	);
};

export default ProfileInformation;
