import { waves, wavesDecided, waveTimes } from "@/app/data/waves";

export default function WavesTable() {
  const getWaveTimeInfo = (start: string) => {
    return waveTimes.find(wt => wt.wave === start);
  };
  if (!wavesDecided) {
    return (
      <div className="mt-4 p-4 rounded-lg border border-blue-200 bg-blue-50 text-blue-900 font-semibold">
        Playing waves will be posted closer to the event. Please check back for updates.
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left text-sm border border-blue-200">
          <thead className="bg-blue-50 text-blue-900 font-bold">
            <tr>
              <th className="px-3 py-2 border-b border-blue-200">Division</th>
              <th className="px-3 py-2 border-b border-blue-200">Start Time (Saturday)</th>
              <th className="px-3 py-2 border-b border-blue-200">Location</th>
            </tr>
          </thead>
          <tbody>
            {waves.map((row) => {
              const waveInfo = getWaveTimeInfo(row.start);
              return (
                <tr key={row.division} className="odd:bg-white even:bg-blue-50/30">
                  <td className="px-3 py-2 border-b border-blue-100 text-gray-900 font-semibold">{row.division}</td>
                  <td className="px-3 py-2 border-b border-blue-100 text-gray-800">
                    {waveInfo ? (
                      <span 
                        className={`inline-block px-3 py-1 rounded-full font-medium ${
                          waveInfo.color === 'green' ? 'bg-green-100 text-green-800' : 
                          waveInfo.color === 'blue' ? 'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {waveInfo.time}
                      </span>
                    ) : (
                      row.start
                    )}
                  </td>
                  <td className="px-3 py-2 border-b border-blue-100 text-gray-600">{row.location ?? "TBD"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-600">
        Sunday play schedule and location are based on your team’s finish on Saturday. Playing sites are announced closer to the event.
      </p>
    </>
  );
}
