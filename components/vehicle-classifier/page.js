'use client';
import SectionWrapper from '@/components/SectionWrapper';
import VehicleClassifierForm from '@/components/vehicle-classifier/VehicleClassifierForm';
import { useRouter } from 'next/navigation';
import CustomButton from '@/components/CustomButton';

export default function VehicleClassifierPage() {
  const router = useRouter();

  const handleBackToBooking = () => {
    router.push('/dv/book-now'); // Adjust the path to your booking page
  };

  return (
    <SectionWrapper className="main">
      <VehicleClassifierForm />
      <div className="mt-4">
        <CustomButton
          onClick={handleBackToBooking}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          Back to Booking Page
        </CustomButton>
      </div>
    </SectionWrapper>
  );
}
