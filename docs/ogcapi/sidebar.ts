import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ogcapi/bohr-ogc-api-features",
    },
    {
      type: "category",
      label: "Collections",
      items: [
        {
          type: "doc",
          id: "ogcapi/get-all-collections",
          label: "Get list of all Bohr OGC API feature collections",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ogcapi/get-collection-by-id",
          label: "Get a single Bohr OGC API feature collection",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ogcapi/get-schema",
          label: "Get schema for a single Bohr OGC API feature collection",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ogcapi/get-collection-queryables",
          label: "Get a list of queryable attributes for this feature collection",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Landing Page",
      items: [
        {
          type: "doc",
          id: "ogcapi/get-landing-page-response",
          label: "Bohr OGC API – Features landing page",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ogcapi/get-conformance-response",
          label: "Bohr OGC API – Features conformance page",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Features",
      items: [
        {
          type: "doc",
          id: "ogcapi/get-items",
          label: "Retrieve features in the feature collection",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ogcapi/get-item-by-id",
          label: "Retrieve a feature from the feature collection",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
