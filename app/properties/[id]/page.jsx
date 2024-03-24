"use client";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";
const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("username");

  const pathName = usePathname();
  return (
    <div>
      <button onClick={() => router.push("/")} className="bg-blue-600">
        Go Back {id} {name} {pathName}
      </button>
    </div>
  );
};

export default PropertyPage;
