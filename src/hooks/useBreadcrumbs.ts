import { BreadcrumbItem } from "@/components/ui/navigations/Breadcrumbs";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

type BreadcrumbsHooks = {
  breadcrumbItem: BreadcrumbItem[];
};

export const useBreadcrumbs = (): BreadcrumbsHooks => {
  const [breadcrumbItem, setBreadcrumbItem] = useState<BreadcrumbItem[]>([]);
  const location = useLocation();
  const { trackId } = useParams();

  const createBreadcrumbItem = (): BreadcrumbItem[] => {
    const result: BreadcrumbItem[] = [];
    if (location.pathname.includes("/track")) {
      result.push({
        text: "ホーム",
        path: "/",
      });
      if (location.pathname.includes("/search")) {
        result.push({
          text: "曲検索",
        });
      }
      if (trackId) {
        result.push(
          {
            text: "曲検索",
            path: "/search/track",
          },
          {
            text: "曲詳細",
          }
        );
      }
    } else {
      result.push({
        text: "ホーム",
      });
    }
    return result;
  };

  useEffect(() => {
    setBreadcrumbItem(createBreadcrumbItem());
  }, [location.pathname]);

  return { breadcrumbItem };
};
