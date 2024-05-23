import PrimaryFooter from "@/components/shared/primary-footer";
import PrimaryNavbar from "@/components/shared/primary-navbar";

export default function CommonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <PrimaryNavbar />
      {children}
      <PrimaryFooter />
    </div>
  );
}
