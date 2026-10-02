export const environment = {

  production: false,
  serverTimeZone: '+00:00',
  referral: 'local',
  
  // ${DEAL_SERVICE_DEAL}/
  api: {

    getClpRates: '${INTEGRATION_SERVICE}/css/retriveCLPProductRates/',
    getClpCommissionRate: '${INTEGRATION_SERVICE}/css/retriveCommisionRate/',
    autoRefreshClpRate: '${INTEGRATION_SERVICE}/css/refreshAndValidateCLPRates',

    calculateGRSD: '${DEAL_SERVICE_DEAL}/calculateGRSD',

    refreshExcaliburData: 'http://localhost:3000/refreshMortgageData',
    fetchStoredExcaliburData: 'http://localhost:3000/fetchStoredExcaliburData',
    retreiveblendedRateAdjustment: 'http://localhost:3000/retrieveblendedRateAdjustment',


    healthCheckCrmImport: '${INTEGRATION_SERVICE}/external/crm/healthCheck/hcImport',
    
    login: '',
    userDetails: '',
    userRoleFunction: '',
    reassignMA: '${DEAL_SERVICE_DEAL}/reAsignDeals',
    reassignPrequalMA: '',
    getCurrentdealStatusURL: '${DEAL_SERVICE_DEAL}/retriveVersionStatus/',
    reassignCloser: '${DEAL_SERVICE_DEAL}/closureAssignment',
    getUserListByRoleName: '',
    SuggesstiveSearch: '',
    PipeLineMetrics: '',
    atRiskDealPipelineSearch: '',
    generatePipelineMetricsReport: '',
    Notification: '',
    RecentApps: '',
    WatchApps: '',
    Actionable: '',
    ContactDetails: '',
    rateholdList: '',
    specificRatehold: '${DEAL_SERVICE_DEAL}/storeRetrieve',
    dealRateholdSearch: '',
    hostURL: '',
    MAList: '',
    PrequalMAList: '',
    getDealData: '${DEAL_SERVICE_DEAL}/storeRetrieve/',
    saveDealData: '${DEAL_SERVICE_DEAL}/dealSave/',
    searchFromEcif: '${INTEGRATION_SERVICE}/ecifbusinessinfo/getECIFThirdPartyDetails',
    DocGenerate: '${INTEGRATION_SERVICE}/ddgs/document',
    docUpload: '',
    EsignMail: '',
    EsignMailCI: '',
    EsignMailMultiCI: '',
    EsignMailHPPCP: '',
    retrieveTask: '',
    retrieveBorrowerTask: '${DEAL_SERVICE_DEAL}/borrowertask',
    retrieveDoc: '',
    productDetails: '${DEAL_SERVICE_DEAL}/getProductDetails',
    refreshToken: '',
    getEnumData: '',
    getLiabilities: '',
    getServiceJsonData: '',
    multiDocUpload: '',
    retrieveChecklist: '',
    dealSummary: '',
    creditor: '',
    InsuranceDocGen: '',
    getDealNotes: '${DEAL_SERVICE_DEAL}/retrieve/dealnotes/',
    saveDealNotes: '${DEAL_SERVICE_DEAL}/dealnotes/',
    getDocumentData: '',
    getReminders: '${DEAL_SERVICE_DEAL}/retrieveReminder',
    reminderAction: '${DEAL_SERVICE_DEAL}/reminder_action',
    creditPull: '${INTEGRATION_SERVICE}/dm.cbpull/',
    updateApplicationStatus: '${DEAL_SERVICE_DEAL}/updateApplicationType/',
    updateReplacedStatus: '${DEAL_SERVICE_DEAL}/updateApplicationStatus',
    saveRateHold: '${INTEGRATION_SERVICE}/lcms/ratehold/',
    getRHByApplicationID: '${DEAL_SERVICE_DEAL}/rateholdwithsameparticipant/',
    retrieveDealNotification: '${DEAL_SERVICE_DEAL}/retrieveDealNotification/',
    markReadUnreadNotifications: '${DEAL_SERVICE_DEAL}/manageDealNotification/',
    ManageWatchList: '',
    dealContact: '${DEAL_SERVICE_DEAL}/retrieveDealContacts/',
    dealNewContact: '${DEAL_SERVICE_DEAL}/add_deal_contacts',
    dealSearchParticipant: '${DEAL_SERVICE_DEAL}/searchDealParticipant',
    dealAssignOrDeleteParticipant: '${DEAL_SERVICE_DEAL}/manageDealContacts/',
    dealHistory: '${DEAL_SERVICE_DEAL}/deal_history/',
    userInterfaceEventLogURL: '',
    getDealsByApplicationID: '${DEAL_SERVICE_DEAL}/dealwithsameparticipant',

    weblogin: 'https://dev4.cibc.digitalmmortgage.com/login/',
    weblogout: location.origin,
    localLogin: false,
    localExternalLogin: false,
    skipLiabilityCheck: false,

    copyDealData: '${DEAL_SERVICE_DEAL}/dealwithsameparticipant',
    calcualtePNIResults: '${INTEGRATION_SERVICE}/dm/calculation/',
    calcualteTDSRResults: '${INTEGRATION_SERVICE}/dm/tdsr/',
    calcualteTDSRResultsWizard: '${INTEGRATION_SERVICE}/dm/tdsrwizard/',
    getRHIssuedData: '',
    fullAppSubmit: '${INTEGRATION_SERVICE}/lcms/fullapp/',
    printDocPackage: '',
    getNotificationPreference: '${DEAL_SERVICE_DEAL}/retrieveNotificationPreference',
    getNotificationCount: '${DEAL_SERVICE_DEAL}/retrieveUnreadNotification',
    saveNotificationPreference: '${DEAL_SERVICE_DEAL}/notificationPreferenceInsertion',
    websocketEndpoint: '',
    mosReferalEmail: '${INTEGRATION_SERVICE}/crm/mosRefererralEmail',
    getReports: '${DEAL_SERVICE_DEAL}/auditDateDoc',
    getReportsConditionException: '${DEAL_SERVICE_DEAL}/conditionExceptionsHistroy/',
    getocrScan: '',
    getReportStart: '${DEAL_SERVICE_DEAL}/auditRun',
    getReportCount: '${DEAL_SERVICE_DEAL}/dealsLeftToBeProcessed',
    getHelpIncomeDoc: '',
    getHelpIncomeDocFr: '',
    getDealSummaryReport: '${DEAL_SERVICE_DEAL}/closing/solutnsRpt',
    setLanguagePreference: '',
    getNotifications: '',
    getMADetails: '${DEAL_SERVICE_DEAL}/mDetails',
    ciffSelection: true,
    externalParticipantDeletion: '${DEAL_SERVICE_DEAL}/deleteDealParticipant/',
    businessReportStatus: '${DEAL_SERVICE_DEAL}/retrieveReports/',
    downloadBusinessReport: '${DEAL_SERVICE_DEAL}/auditDateDoc/getReport/',
    requestToGenerateReport: '${DEAL_SERVICE_DEAL}/exxecuteReportGenerator/',
    getReportingStatus: '${DEAL_SERVICE_DEAL}/getReportingStatus/',
    getUWNotes: '${DEAL_SERVICE_DEAL}/retrieve/uwnotes/',
    saveUWNotes: '${INTEGRATION_SERVICE}/lcms/submituwnote/',
    getFCINotes: '${DEAL_SERVICE_DEAL}/retrieve.fcinotes/',
    saveFCINotes: '${DEAL_SERVICE_DEAL}/savefcinotes/',
    reminderRead: '${DEAL_SERVICE_DEAL}/reminderReadStatus',
    getsplID: '${DEAL_SERVICE_DEAL}/getMALegacyId',
    getSourceofdeal: '${DEAL_SERVICE_DEAL}/getMALegacyId',
    sendRateReqMail: '${INTEGRATION_SERVICE}/pricingRequest/sendType1Mail',
    saveRateReqForm: '${INTEGRATION_SERVICE}/pricingRequest/savePricingDetails',
    retriveForm: '${INTEGRATION_SERVICE}/pricingRequest/retrivePricingDetails',
    saveSubmissionNotes: '${DEAL_SERVICE_DEAL}/saveSubmissionNotes/',
    initiateCIDocsEmail: '',
    getFactSheettProductSummaryCancelDoc: '',
    getCLASSProperties: '${INTEGRATION_SERVICE}/class/getPropertyDetails/',
    getAssetRetrieve: '${INTEGRATION_SERVICE}/asset/getAssetDetails/',
    cancelDeal: '${DEAL_SERVICE_DEAL}/cancelDeal/',
    getTransitDetails: '',
    calculateTotalPriorCharge: '${INTEGRATION_SERVICE}/dm/totalPriorChargeCal/',
    unLockDeal: '${DEAL_SERVICE_DEAL}/dealunLock/',
    unLockDealRequest: '${DEAL_SERVICE_DEAL}/dealunLockRequest/',
    getProperty: '${DEAL_SERVICE_DEAL}/getPropValFeeDetails/',
    ValuationFeeDetails: '',
    userRolePermissionFunction: '',
    getBankCalender: '',
    validatePrequal: '${INTEGRATION_SERVICE}/prequal/validateprequal',
    updateStatus: '${INTEGRATION_SERVICE}/prequal/updateprequal',
    getPostAmendmentDetails: '${DEAL_SERVICE_DEAL}/getPostAmendmentDetails/',
    prequalExpandedView: '',
    getBuilderDetails: '',
    getPrequalDeals: '${DEAL_SERVICE_DEAL}/getAutoLinkPrequalDeals/',
    savePrequal: '${INTEGRATION_SERVICE}/prequal/savePrequalDetails',
    getEcifRuleValidate: '${INTEGRATION_SERVICE}/validate/getDivestedStatus/',
    getQuickLinksUrl: '${DEAL_SERVICE_DEAL}/quickLinkDetails',
    getUnderwritingStatus: '${DEAL_SERVICE_DEAL}/getUnderwritingStatus/',
    getEcmIngestStatus: '${DEAL_SERVICE_DEAL}/retrieveDocDetails/',
    performEcmIngestion: '',
    setSKPToolClick: '${DEAL_SERVICE_DEAL}/dealSaveCIInvoke/',
    requestClassAssetId: '${INTEGRATION_SERVICE}/asset/createSubjectProperty',
    skpUrl: '',
    getThirdPartyDropdownOptions: '',
    getMMTGProperties: '',
    skpDocEnURL: '',
    skpDocFrURL: '',
    getSkpUrl: '${DEAL_SERVICE_DEAL}/getSKPUrlDetails',
    requestDealCancellation: '${INTEGRATION_SERVICE}/deal/dealCancellation/',
    retrieveRules: '',
    saveDocumentException: '',
    updateUserRuleToggle: '',
    saveDocumentOptions: '',
    saveDocumentSupplementaryComments: '',
    getHppProducts: '${DEAL_SERVICE_DEAL}/hppReconfig/getHppProducts/',
    initiateHppReconfig: '${INTEGRATION_SERVICE}/class/hppReconfig/initiate',
    cancelHppReconfig: '${INTEGRATION_SERVICE}/class/hppReconfig/cancel',
    retrieveHppExistingDetails: '${INTEGRATION_SERVICE}/class/hppReconfig/retriveHppExistingDetails',
    dealHppRenegotiateStatus: '${DEAL_SERVICE_DEAL}/hppReconfig/getHppProducts/getRenegotiateStatus',
    insertRules: '',
    DownpaymentSource: '',
    IncomeSource: '',
    deleteDealData: '',
    deleteErrorsAndWarnings: '${INTEGRATION_SERVICE}/warnings-error/deleteErrorsAndWarnings',
    getNexQueue: '',
    reassignDeals: '${DEAL_SERVICE_DEAL}/reassignDeals',
    reallocateDeals: '${DEAL_SERVICE_DEAL}/reallocateDeals',
    getPremium: '${INTEGRATION_SERVICE}/css/getPremium/',
    delegateDeals: '${DEAL_SERVICE_DEAL}/updatePATUserDetails',
    getRoleNameList: '',
    saveDocument: '',
    getPATGroupDashboardCount: '',
    getSLAWorkingTimes: '',
    updateSLAWorkingTimes: '',
    duplicateDocument: '',
    warningErrors: '${INTEGRATION_SERVICE}/warnings-error/getSetErrorsAndWarnings',
    warningErrorsUpdate: '${INTEGRATION_SERVICE}/warnings-error/updateErrorsAndWarnings',
    cancelIDP: '',
    getIDPStatus: '',
    rushRequestSave: '${DEAL_SERVICE_DEAL}/rushRequestSave',
    inProgressByPat: '${DEAL_SERVICE_DEAL}/getInprogressByPATDetails',
    updateAnnualIncomeDetails: '${DEAL_SERVICE_DEAL}/updateAnnualIncomeDetails',
    allocateDeal: '${DEAL_SERVICE_DEAL}/allocateDeal',
    getModuleJSONList: '${DEAL_SERVICE_DEAL}/getModuleJSONList',
    getModuleJSONListByStaticToken: '',
    renatloffset: '${INTEGRATION_SERVICE}/dm/rentaloffset/',
    getPATdeals: '${DEAL_SERVICE_DEAL}/getPATdeals',
    getLCMSSolicitor: '${INTEGRATION_SERVICE}/lcms/LcmsSolicitorLookup',
    manageLCMSSolicitor: '${DEAL_SERVICE_DEAL}/manageLCMSSolicitor',
    getSchedule: '${INTEGRATION_SERVICE}/calculator/getSchedule',
    getEPCRates: '${INTEGRATION_SERVICE}/calculator/getEPCRates',
    generateSummaryPDF: '${INTEGRATION_SERVICE}/calculator/generateSummaryPDF',
    getFetchDetails: '${INTEGRATION_SERVICE}/calculator/getFetchDetails',
    getShellAppPipelineData: '',
    getShellAppData: '',
    getEcifPartyInfo: '${INTEGRATION_SERVICE}/shellApp/getCustomerDetails',
    saveShellApp: '${INTEGRATION_SERVICE}/shellApp/saveShellAppData',
    getProspectData: '',
    validateAndSaveShellApp: '${INTEGRATION_SERVICE}/shellApp/validateAndSaveShellAppData',
    refreshComplianceStatus: '${INTEGRATION_SERVICE}/shellApp/refreshComplianceStatus',
    reAssignShellApp: '',
    getFraudSummary: '${INTEGRATION_SERVICE}/forensicDetails/getFraudDetails/',
    getUWSummary: '${DEAL_SERVICE_DEAL}/getDealSummery/',
    getFraudValidation: '',
    getFraudValidationDetails: '',
    validateIdpDocumentsOnSubmit: '${INTEGRATION_SERVICE}/warning-error/validateIdpDocumentsOnSubmit',
    submitEscalations: '${DEAL_SERVICE_DEAL}/submitEscalations/',
    getDocumentDealHistoryReport: '',
    getDocumentAmendMentDetails: '',
    updateApplicationId: '${INTEGRATION_SERVICE}/shellApp/updateLead',
    updateReferral: '${DEAL_SERVICE_DEAL}/edit_referral/',
    deleteReferral: '${DEAL_SERVICE_DEAL}/delete_referral/',
    getReferral: '${DEAL_SERVICE_DEAL}/get_referral',
    addReferral: '${DEAL_SERVICE_DEAL}/add_referrals',
    prequalSearch: '',
    switchSearch: '',
    calcualteTDSRResultsPreapproval: '${INTEGRATION_SERVICE}/dm/dsrCalculation/',
    savePreapproval: '${INTEGRATION_SERVICE}/dm/preapprovalCalculation/',
    updatePreapprovalConvertedDatePrequal: '${INTEGRATION_SERVICE}/prequal/digitalleaddate/prequal',
    updatePreapprovalConvertedDateSwitch: '${INTEGRATION_SERVICE}/prequal/digitalleaddate/switch',
    updateStatusPrequal: '${INTEGRATION_SERVICE}/prequal/updateprequal',
    
    updateStatusSwitch: '${INTEGRATION_SERVICE}/prequal/updateprequal/switch',
    resetDocumentFraudStatus: '${INTEGRATION_SERVICE}/fraud-forensic/status/reset',
    getMergeDocDetails: '',

    getIsFromLeads: '${DEAL_SERVICE_DEAL}/getFlowType/',
    getRemoteIdNotes: '${DEAL_SERVICE_DEAL}/retrieve/ridnotes/',
    saveRemoteIdNotes: '${DEAL_SERVICE_DEAL}/saveridnotes/',
    postExceptionNote: '${DEAL_SERVICE_DEAL}/saveNotes',
    deleteExceptionNote: '${DEAL_SERVICE_DEAL}/deleteNotes',
    updateExceptionNote: '${DEAL_SERVICE_DEAL}/updateNotes',
    getNotesAmendments: '${DEAL_SERVICE_DEAL}/getNotesAmendments/',
    getAuditEventHistory: '${DEAL_SERVICE_DEAL}/getAuditEventHistroy/',
    retrieveClientDetails: '${INTEGRATION_SERVICE}/shellApp/retriveClientDetails',
    retrieveRateDetails: '${INTEGRATION_SERVICE}/calculator/retriveRateDetails',
    getEnabledPilot: '${DEAL_SERVICE_DEAL}/validatePilotCheck',
    getPreappRhJson: '',
    getExcpNoteData: '${DEAL_SERVICE_DEAL}/getNotes',
  },

  methodName: {
    prospectList: 'prospectList',
    prospectSearch: 'prospectSearch',
    divestedStatus: 'divestedStatus'
  },

  insights: {
    key: 'insights_key',
    enabled: 'insights_enabled'
  },

  featureFlags: {
    PBPT4608and4312Enable: false,
    PBPT4608PrintLogging: true,
    DisableUserRoleFunctionAPI: true,
    EnableClassDownValidator: true,
    enableNCI: true,
    hppReconfigure2780: true
  },

  configuration: {
    currencyCode: 'CAD',
    date_format: 'MM/DD/YYYY',
    callFromServer: true,
    moduleName: 'Personal Discussion'
  }
}



export const durations = {
  sessionIdleTime: 30 * 60 * 1000,

  // minutes
  sessionPopupTime: 25 * 60 * 1000,

  // In seconds: 560
  // 3 mins for warning window based on sessionIdleTime/sessionPopupTime
  sessionLogoutRefreshTime: 560,

  // In milliseconds
  dealStatusRefreshTime: 60 * 1000,

  // In milliseconds
  tokenRefreshTime: 15 * 60 * 1000,

  searchDebounceTime: 1300
};

  const AUTH_SERVICE = 'https://dev4.cibc.digitalmmortgage.com/advisor-auth-service';

  const SEARCH_SERVICE = 'https://dev4.cibc.digitalmmortgage.com/search-service';

  const DEAL_SERVICE_SHELL = 'https://dev4.cibc.digitalmmortgage.com/deal-service/shellApp';

  const DEAL_SERVICE_DEAL = 'https://dev4.cibc.digitalmmortgage.com/deal-service/deal';

  const INTEGRATION_SERVICE = 'https://dev4.cibc.digitalmmortgage.com/integration-service';

  const DOCUMENT_SERVICE = 'https://dev4.cibc.digitalmmortgage.com/document-service';

  const ADMIN_SERVICE = 'https://dev4.cibc.digitalmmortgage.com/admin-service';

  const NOTIFICATION_SERVICE =
    'https://dev4.cibc.digitalmmortgage.com/notification-service';

  const AUDIT_SERVICE =
    'https://dev4.cibc.digitalmortgage.com/audit-service';

  const BATCH_SERVICE =
    'https://dev4.cibc.digitalmortgage.com/batch-service';

  const RULE_SERVICE =
    'https://dev4.cibc.digitalmortgage.com/rule-service';

  const ESIGN_SERVICE =
    'https://dev4.cibc.digitalmortgage.com/esign-service';

export const uploadFileRestriction = {
  allowedExtensionsRef: [
    'tif',
    'tiff',
    'pdf',
    'doc',
    'docx',
    'xlx',
    'xlsx',
    'jpeg',
    'jpg',
    'gif',
    'bmp'
  ],

  allowedExtensions: [
    'tif',
    'tiff',
    'pdf',
    'docx',
    'xlsx',
    'jpeg',
    'jpg',
    'png',
    'gif',
    'bmp',
    'xlx'
  ],

  allowedExtensionsSize: [
    'tif:5',
    'tiff:5',
    'pdf:5',
    'docx:5',
    'xlsx:5',
    'jpeg:5',
    'jpg:5',
    'png:5',
    'gif:5',
    'bmp:5',
    'xlx:5'
  ],

  allowedExtensionsSizeCI: [
    'tif:15',
    'tiff:15',
    'pdf:15',
    'docx:5',
    'xlsx:5',
    'jpeg:15',
    'jpg:15',
    'png:15',
    'gif:5',
    'bmp:5',
    'xlx:5'
  ],

  maxNumberOfFiles: 10,

  notAllowedFileName: ['%', ';'],

  allowedExtensionsForIndexing: ['pdf'],

  allowedIndexingCategorySize: 15,

  allowedExtensionsIndexingSize: [15]
};

export const constRefreshStatus = {
  rateholdStatus: ''
};

// INTK-756: Introducing 'COSTCO01'
export const costcoFeatureCode = {
  implementation: '2023-05-01'
};

export const docRule = {
  docsupplementlength: 10
};