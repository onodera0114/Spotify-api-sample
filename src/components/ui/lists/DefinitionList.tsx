import { useState } from "react";
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export type ListItems = {
  teamText: string;
  descriptionText: string;
  noteTitle?: string;
  noteText?: string;
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
      <ListItem>
        <ListItemText primary={teamText} />
      </ListItem>
    );
  };

  const DefinitionDescription = (descriptionText: string): JSX.Element => {
    return (
      <ListItem>
        <ListItemText primary={descriptionText} />
      </ListItem>
    );
  };

  const DefinitionNested = (noteTitle: string, noteText: string): JSX.Element => {
    return (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem sx={{ pl: 4 }}>
            <ListItemText primary={noteTitle} secondary={noteText} />
          </ListItem>
        </List>
      </Collapse>
    );
  };

  return (
    <>
      {item.noteText ? (
        <>
          <ListItemButton onClick={handleClick}>
            {DefinitionTeam(item.teamText)}
            {DefinitionDescription(item.descriptionText)}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {DefinitionNested(item.noteTitle ?? "", item.noteText)}
        </>
      ) : (
        <ListItem>
          {DefinitionTeam(item.teamText)}
          {DefinitionDescription(item.descriptionText)}
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
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        subHeader && (
          <ListSubheader component="div" id="nested-list-subheader">
            {subHeader}
          </ListSubheader>
        )
      }
    >
      {listItems.map((item, index) => (
        <>
          <CreateList item={item} key={index} />
          {listItems.length !== index + 1 && <Divider />}
        </>
      ))}
    </List>
  );
};
