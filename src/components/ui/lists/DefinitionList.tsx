import { Fragment, useState } from "react";
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export type ListItems = {
  key: string;
  teamText: string;
  descriptionText: string | number | React.ReactNode;
  noteTitle?: string;
  noteText?: string | React.ReactNode;
};

export type Props = {
  listItems: ListItems[];
  subHeader?: string;
};

const CreateList = (props: { item: ListItems }): JSX.Element => {
  const { item } = props;
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  const DefinitionTeam = (teamText: string): JSX.Element => {
    return (
      <ListItem component="div">
        <ListItemText primary={teamText} />
      </ListItem>
    );
  };

  const DefinitionDescription = (descriptionText: string | number | React.ReactNode): JSX.Element => {
    return (
      <ListItem component="div">
        <ListItemText primary={descriptionText} sx={{ wordBreak: "break-word" }} />
      </ListItem>
    );
  };

  const DefinitionNested = (noteTitle: string, noteText: string | React.ReactNode): JSX.Element => {
    return (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="ul" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemText primary={noteTitle} secondary={noteText} sx={{ whiteSpace: "pre-wrap" }} />
          </ListItem>
        </List>
      </Collapse>
    );
  };

  return (
    <>
      {item.noteText ? (
        <>
          <ListItemButton key={item.key} component="li" onClick={handleClick}>
            {DefinitionTeam(item.teamText)}
            {DefinitionDescription(item.descriptionText)}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {DefinitionNested(item.noteTitle ?? "", item.noteText)}
        </>
      ) : (
        <ListItem key={item.key}>
          {DefinitionTeam(item.teamText)}
          {DefinitionDescription(item.descriptionText)}
          {/* リストをそろえるためにvisibility: "hidden"を指定 */}
          <ExpandLess sx={{ visibility: "hidden" }} />
        </ListItem>
      )}
    </>
  );
};

export const DefinitionList: React.FC<Props> = (props: Props) => {
  const { subHeader, listItems } = props;

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="ul"
      aria-labelledby="nested-list-subheader"
      subheader={
        subHeader && (
          <ListSubheader component="div" id="nested-list-subheader">
            <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
              {subHeader}
            </Typography>
          </ListSubheader>
        )
      }
    >
      {listItems.map((item, index) => (
        <Fragment key={item.key}>
          <CreateList item={item} />
          {listItems.length !== index + 1 && <Divider />}
        </Fragment>
      ))}
    </List>
  );
};
