export const types = `
  type ClientPortal {
    _id: String!
    name: String!
    description: String
    url: String
    logo: String
    icon: String
    domain: String
    dnsStatus: String
    knowledgeBaseLabel: String
    knowledgeBaseTopicId: String
    ticketLabel: String
    taskPublicBoardId: String
    taskPublicPipelineId: String
    taskLabel: String
    taskStageId: String
    taskPipelineId: String
    taskBoardId: String
    ticketStageId: String
    ticketPipelineId: String
    ticketBoardId: String
    styles: Styles
    advanced: Advanced
    css: String
    mobileResponsive: Boolean
  }

  type Styles {
    bodyColor: String
    headerColor: String
    footerColor: String
    helpColor: String
    backgroundColor: String
    activeTabColor: String
    baseColor: String
    headingColor: String
    linkColor: String
    linkHoverColor: String
    baseFont: String
    headingFont: String
    dividerColor: String
    primaryBtnColor: String
    secondaryBtnColor: String
  }

  type Advanced {
    authAllow: String
    permission: String
    viewTicket: String
  }

  input AdvancedParams {
    authAllow: String
    permission: String
    viewTicket: String
  }

  input StylesParams {
    bodyColor: String
    headerColor: String
    footerColor: String
    helpColor: String
    backgroundColor: String
    activeTabColor: String
    baseColor: String
    headingColor: String
    linkColor: String
    linkHoverColor: String
    dividerColor: String
    primaryBtnColor: String
    secondaryBtnColor: String
    baseFont: String
    headingFont: String
  }
`;

export const queries = `
  clientPortalGetConfigs(page: Int, perPage: Int): [ClientPortal]
  clientPortalGetConfig(_id: String!): ClientPortal
  clientPortalGetLast: ClientPortal
  clientPortalConfigsTotalCount: Int
  clientPortalGetTaskStages(taskPublicPipelineId: String!): [Stage]
  clientPortalGetTasks(stageId: String!): [Task]
  clientPortalTickets(email: String!): [Ticket]
`;

export const mutations = `
  clientPortalCreateTicket(
    stageId: String!
    subject: String!
    description: String
    email: String!
    priority: String
  ): Ticket
  clientPortalCreateCustomer(
    configId: String!
    firstName: String!
    lastName: String
    email: String!
  ): Customer
  clientPortalConfigUpdate(
    _id: String
    name: String
    description: String
    logo: String
    icon: String
    url: String
    domain: String
    knowledgeBaseLabel: String
    knowledgeBaseTopicId: String
    ticketLabel: String
    taskLabel: String
    taskPublicBoardId: String
    taskPublicPipelineId: String
    taskStageId: String
    taskPipelineId: String
    taskBoardId: String
    ticketStageId: String
    ticketPipelineId: String
    ticketBoardId: String
    styles: StylesParams
    advanced: AdvancedParams
    css: String
    mobileResponsive: Boolean
  ): ClientPortal
`;
