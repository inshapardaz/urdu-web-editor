import React, { useState } from "react";
import { render } from "react-dom";

import Editor from "../../src";
import "../../src/styles.module.css";
import { ConfigProvider, Divider, Drawer, FloatButton, Select, Space, Switch } from "antd";
import Icons from "../../src/icons";

import i18n from "../../src/i18n";

const Demo = () => {
  const [open, setOpen] = useState(false);
  const [configuration, setConfiguration] = useState({
    richText: true,
    language: "en",
    toolbar: {
      showAlignment: true,
      showBlockFormat: true,
      showFontFormat: true,
      showInsert: true,
      showListFormat: true,
      showUndoRedo: true,
      showExtraFormat: true,
      showInsertLink: true,
    }
  });
  const locale = i18n[configuration.language];
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <ConfigProvider
      direction={configuration.language == "ur" ? "rtl" : "ltr"}
      locale={configuration.language}
      componentSize="large"
    >
      <div className="editor-shell" style={{ direction: locale.direction }}>
        <Editor
          configuration={configuration}
          setValue={(val) => console.log(val)}
        />
      </div>
      <FloatButton icon={<Icons.Setting />} onClick={showDrawer} />
      <Drawer
        title="Settings"
        icon={<Icons.Setting />}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Space direction="vertical">
          <Switch
            checkedChildren="Rich Text"
            unCheckedChildren="Plain Text"
            defaultChecked={configuration.richText}
            onChange={(checked) =>
              setConfiguration((e) => ({ ...e, richText: checked }))
            }
          />
          <Select
            defaultValue={configuration.language}
            onChange={(value) =>
              setConfiguration((e) => ({ ...e, language: value }))
            }
            options={[
              {
                value: "en",
                label: "English",
              },
              {
                value: "ur",
                label: "Urdu",
              },
            ]}
          />
          <Divider />
          <Switch
            checkedChildren="Show Alignment"
            unCheckedChildren="Hide Alignment"
            defaultChecked={configuration.toolbar.showAlignment}
            onChange={(checked) =>
              setConfiguration((e) => ({ ...e, toolbar: {... e.toolbar, showAlignment : checked } }))
            }
          />
          <Switch
              checkedChildren="Show Undo/Redo"
              unCheckedChildren="Hide Undo/Redo"
              defaultChecked={configuration.toolbar.showUndoRedo}
              onChange={(checked) =>
                setConfiguration((e) => ({ ...e, toolbar: {... e.toolbar, showUndoRedo : checked } }))
              }
            />
          <Switch
              checkedChildren="Show Block Format"
              unCheckedChildren="Hide Block Format"
              defaultChecked={configuration.toolbar.showBlockFormat}
              onChange={(checked) =>
                setConfiguration((e) => ({ ...e, toolbar: {... e.toolbar, showBlockFormat : checked } }))
              }
            />
          <Switch
              checkedChildren="Show Insert"
              unCheckedChildren="Hide Insert"
              defaultChecked={configuration.toolbar.showInsert}
              onChange={(checked) =>
                setConfiguration((e) => ({ ...e, toolbar: {... e.toolbar, showInsert : checked } }))
              }
            />
          <Switch
              checkedChildren="Show Font Format"
              unCheckedChildren="Hide Font Format"
              defaultChecked={configuration.toolbar.showFontFormat}
              onChange={(checked) =>
                setConfiguration((e) => ({ ...e, toolbar: {... e.toolbar, showFontFormat : checked } }))
              }
            />
          <Switch
              checkedChildren="Show extra formatting options"
              unCheckedChildren="Hide extra formatting options"
              defaultChecked={configuration.toolbar.showExtraFormat}
              onChange={(checked) =>
                setConfiguration((e) => ({ ...e, toolbar: {... e.toolbar, showExtraFormat : checked } }))
              }
            />
          <Switch
              checkedChildren="Show link options"
              unCheckedChildren="Hide link options"
              defaultChecked={configuration.toolbar.showInsertLink}
              onChange={(checked) =>
                setConfiguration((e) => ({ ...e, toolbar: {... e.toolbar, showInsertLink : checked } }))
              }
            />
        </Space>
      </Drawer>
    </ConfigProvider>
  );
};

render(<Demo />, document.querySelector("#demo"));
