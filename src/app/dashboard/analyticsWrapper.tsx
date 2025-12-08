import AnalyticsKeluarga from "./@datakeluarga/page";
import AnalyticsPenduduk from "./@penduduk/page";
import AnalyticsGender from "./@jeniskelamin/page";

export default function AnalyticsWrapper() {
  return (
    <div className="w-full px-4 mt-4">
      <div className="flex  flex-wrap gap-4">
        <AnalyticsPenduduk />
        <AnalyticsKeluarga />
        <AnalyticsGender />
      </div>
    </div>
  );
}
