interface Department {
  name: string;
  email: string;
}

interface DepartmentListProps {
  departments: Department[];
}

export default function DepartmentList({ departments }: DepartmentListProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Department Contacts
      </h3>
      <div className="space-y-3">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100 last:border-b-0 gap-2"
          >
            <span className="text-gray-700 font-medium">{dept.name}</span>
            <a
              href={`mailto:${dept.email}`}
              className="text-red-600 hover:text-red-800 text-sm transition-colors break-all"
            >
              {dept.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

