import MemberCard from "../molecules/MemberCard";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  email: string;
  phone: string;
  linkedin?: string;
}

interface ManagementTeamSectionProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export default function ManagementTeamSection({
  title,
  subtitle,
  members,
}: ManagementTeamSectionProps) {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              position={member.position}
              description={member.description}
              email={member.email}
              phone={member.phone}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

