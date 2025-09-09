import { DefinitionList, ListItems } from "@/components/ui/lists/DefinitionList";
import { audioFeaturesKeyList } from "@/config/keyList";
import { TrackAudioFeaturesResponse } from "@/types/trackAuditFeatures";

type Props = {
  features: TrackAudioFeaturesResponse;
};

export const FeaturesInfomation: React.FC<Props> = (props: Props): JSX.Element => {
  const { features } = props;

  const createListData = (features: TrackAudioFeaturesResponse): ListItems[] => {
    const listItems: ListItems[] = [];
    audioFeaturesKeyList.forEach((item) => {
      listItems.push({
        key: item.key,
        teamText: item.teamText,
        descriptionText: features[item.key as keyof TrackAudioFeaturesResponse]!.toString(),
        noteTitle: item.noteTitle ?? "",
        noteText: item.noteText ?? "",
      });
    });
    return listItems;
  };

  return <DefinitionList listItems={createListData(features)} subHeader="曲の特徴" />;
};
