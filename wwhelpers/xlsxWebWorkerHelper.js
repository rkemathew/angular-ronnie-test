var XlsxWebWorkerHelper = {
    DB_COLUMNS_METADATA: [
        {
            normalizedColumnName: 'CURRENCY',
            xlsxDisplayColumnName: 'Currency',
            displayColumnName: 'Currency',
            dataAttributeName: 'currency',
            expectedType: 's',
            isRequired: true,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'UNITSINDUSTRYSECTOR',
            xlsxDisplayColumnName: 'Unit\'s Industry Sector',
            displayColumnName: 'Unit\'s Inustry Sector',
            dataAttributeName: 'unitsIndustrySector',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'UNITREVENUETURNOVER',
            xlsxDisplayColumnName: 'Unit Revenue / Turnover',
            displayColumnName: 'Unit Revenue / Turnover',
            dataAttributeName: 'countryTotalRevenueTurnOver',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'UNITTOTALNUMBEROFEMPLOYEES',
            xlsxDisplayColumnName: 'Unit Total Number of Employees',
            displayColumnName: 'Unit Total Number of Employees',
            dataAttributeName: 'unitTotalNumEmployees',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 1
        },
        {
            normalizedColumnName: 'EMPLOYEEJOBTITLE',
            xlsxDisplayColumnName: 'Employee Job Title',
            displayColumnName: 'Employee Job Title',
            dataAttributeName: 'employeeJobTitle',
            expectedType: 's',
            isRequired: true,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'EMPLOYEEGRADEBAND',
            xlsxDisplayColumnName: 'Employee Grade / Band',
            displayColumnName: 'Employee Grade / Band',
            dataAttributeName: 'employeeGradeBand',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'EMPLOYEEIDDONOTUSEEMPLOYEESNAMEORSOCIALSECURITYNUMBERDUETOINTERNATIONALPRIVACYLAW',
            xlsxDisplayColumnName: 'Employee ID (do not use employee\'s name or social security number due to international privacy law)',
            displayColumnName: 'Employee ID',
            dataAttributeName: 'employeeId',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'MANAGEREMPLOYEEIDDONOTUSEMANAGERSNAMEORSOCIALSECURITYNUMBERDUETOINTERNATIONALPRIVACYLAW',
            xlsxDisplayColumnName: 'Manager Employee ID (do not use manager\'s name or social security number due to international privacy law)',
            displayColumnName: 'Manager Employee ID',
            dataAttributeName: 'managerEmployeeId',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'REPORTINGLEVELFROMCEO',
            xlsxDisplayColumnName: 'Reporting Level from CEO',
            displayColumnName: 'Reporting Level from CEO',
            dataAttributeName: 'reportingLevelFromCeo',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'PERFORMANCERANKING',
            xlsxDisplayColumnName: 'Performance Ranking',
            displayColumnName: 'Performance Ranking',
            dataAttributeName: 'performanceRanking',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'GENDER',
            xlsxDisplayColumnName: 'Gender',
            displayColumnName: 'Gender',
            dataAttributeName: 'gender',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'ORGANIZATIONHIREDATE',
            xlsxDisplayColumnName: 'Organization Hire Date',
            displayColumnName: 'Company Hire Date',
            dataAttributeName: 'companyHireDate',
            expectedType: 'd',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'CURRENTLEVELJOBSTARTDATE',
            xlsxDisplayColumnName: 'Current Level / Job Start Date',
            displayColumnName: 'Current Level / Job Start Date',
            dataAttributeName: 'currentlevelJobStartDate',
            expectedType: 'd',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'FTE',
            xlsxDisplayColumnName: 'FTE %',
            displayColumnName: 'FTE percentage',
            dataAttributeName: 'ftePercentage',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'EMPLOYEEWORKLOCATIONZIPPOSTALCODE',
            xlsxDisplayColumnName: 'Employee Work Location / Zip / Postal Code',
            displayColumnName: 'Employee Work Location',
            dataAttributeName: 'employeeWorkLocation',
            expectedType: 's',
            isRequired: true,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'JOBFAMILYSUBFAMILYCODENOTREQUIREDIFREFJOBCODEISPROVIDEDINCOLUMNR',
            xlsxDisplayColumnName: 'Job Family / Subfamily Code (not required if Ref. Job Code is provided in column R)',
            displayColumnName: 'Job Family / Subfamily Code',
            dataAttributeName: 'jobFamily',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'REFERENCELEVELNOTREQUIREDIFREFJOBCODEISPROVIDEDINCOLUMNR',
            xlsxDisplayColumnName: 'Reference Level  (not required if Ref. Job Code is provided in Column R)',
            displayColumnName: 'Reference Level',
            dataAttributeName: 'referenceLevel',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'REFERENCEJOBCODE',
            xlsxDisplayColumnName: 'Reference Job Code',
            displayColumnName: 'Reference Job Code',
            dataAttributeName: 'referenceJobCode',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'HAYGROUPTOTALPOINTS',
            xlsxDisplayColumnName: 'Hay Group Total Points',
            displayColumnName: 'Hay Group Total Points',
            dataAttributeName: 'haygroupTotalPoints',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'BASICPAYMENTS',
            xlsxDisplayColumnName: 'Basic Payments',
            displayColumnName: 'Basic Payments',
            dataAttributeName: 'basicPayments',
            expectedType: 'n',
            isRequired: true,
            isYN: false,
            minValue: 1
        },
        {
            normalizedColumnName: 'FIXEDPAYMENTS',
            xlsxDisplayColumnName: 'Fixed Payments',
            displayColumnName: 'Fixed Payments',
            dataAttributeName: 'fixedPayments',
            expectedType: 'n',
            isRequired: true,
            isYN: false,
            minValue: 1
        },
        {
            normalizedColumnName: 'SALARYSTRUCTUREMINIMUM',
            xlsxDisplayColumnName: 'Salary Structure Minimum',
            displayColumnName: 'Salary Structure Minimum',
            dataAttributeName: 'salaryStructureMinimum',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 1
        },
        {
            normalizedColumnName: 'SALARYSTRUCTUREMIDPOINT',
            xlsxDisplayColumnName: 'Salary Structure Midpoint',
            displayColumnName: 'Salary Structure Midpoint',
            dataAttributeName: 'salaryStructureMidpoint',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 1
        },
        {
            normalizedColumnName: 'SALARYSTRUCTUREMAXIMUM',
            xlsxDisplayColumnName: 'Salary Structure Maximum',
            displayColumnName: 'Salary Structure Maximum',
            dataAttributeName: 'salaryStructureMaximum',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 1
        },
        {
            normalizedColumnName: 'TOTALANNUALSHIFTPREMIUMSPAID',
            xlsxDisplayColumnName: 'Total Annual Shift Premiums Paid',
            displayColumnName: 'Total Annual Shift Premiums Paid',
            dataAttributeName: 'totalAnnualShiftPremiumsPaid',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'SHORTTERMVARIABLEPAYMENTELIGIBILITYYN',
            xlsxDisplayColumnName: 'Short-term Variable Payment Eligibility (Y/N)',
            displayColumnName: 'Short-Term Variable Payment Eligibility',
            dataAttributeName: 'shortTermVariablePaymentEligibility',
            expectedType: 's',
            isRequired: true,
            isYN: true,
            minValue: false
        },
        {
            normalizedColumnName: 'ACTUALANNUALSHORTTERMVARIABLEPAYMENT',
            xlsxDisplayColumnName: 'Actual Annual Short-term Variable Payment',
            displayColumnName: 'Actual Annual Short-Term Variable Payment',
            dataAttributeName: 'actualAnnualShortTermVariablePayment',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'TARGETSHORTTERMVARIABLEPAYMENTOFBASESALARY',
            xlsxDisplayColumnName: 'Target Short-term Variable Payment (% of Base Salary)',
            displayColumnName: 'Target Short-Term Variable Payment',
            dataAttributeName: 'targetShortTermVariablePayment',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'CARELIGIBILITYYN',
            xlsxDisplayColumnName: 'Car Eligibility (Y/N)',
            displayColumnName: 'Car Eligibility',
            dataAttributeName: 'carEligibility',
            expectedType: 's',
            isRequired: true,
            isYN: true,
            minValue: false
        },
        {
            normalizedColumnName: 'LONGTERMINCENTIVEELIGIBILITYYN',
            xlsxDisplayColumnName: 'Long-term Incentive Eligibility (Y/N)',
            displayColumnName: 'Long-Term Incentive Eligibility',
            dataAttributeName: 'longTermIncentiveEligibility',
            expectedType: 's',
            isRequired: true,
            isYN: true,
            minValue: false
        },
        {
            normalizedColumnName: 'TYPEOFLONGTERMINCENTIVE1SOSARRSPSPU',
            xlsxDisplayColumnName: 'Type of Long-term Incentive - 1 (SO, SAR, RS, PS, PU)',
            displayColumnName: 'Type of Long-Term Incentive - 1',
            dataAttributeName: 'TypeOfLongTermIncentives1',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'NUMBEROFSHARESOPTIONSGRANTED1',
            xlsxDisplayColumnName: 'Number of Shares / Options Granted - 1',
            displayColumnName: 'Number of Shares / Options Granted - 1',
            dataAttributeName: 'numberOfSharesOptionsGranted1',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'GRANTDATE1',
            xlsxDisplayColumnName: 'Grant Date - 1',
            displayColumnName: 'Grant Date - 1',
            dataAttributeName: 'grantedDate1',
            expectedType: 'd',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'GRANTPRICECURRENCY1',
            xlsxDisplayColumnName: 'Grant Price Currency - 1',
            displayColumnName: 'Grant Price Currency - 1',
            dataAttributeName: 'grantPriceCurrency1',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'GRANTPRICE1',
            xlsxDisplayColumnName: 'Grant Price - 1',
            displayColumnName: 'Grant Price - 1',
            dataAttributeName: 'grantPrice1',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'TYPEOFLONGTERMINCENTIVE2SOSARRSPSPU',
            xlsxDisplayColumnName: 'Type of Long-term Incentive - 2 (SO, SAR, RS, PS, PU)',
            displayColumnName: 'Type of Long-Term Incentive - 2',
            dataAttributeName: 'TypeOfLongTermIncentives2',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'NUMBEROFSHARESOPTIONSGRANTED2',
            xlsxDisplayColumnName: 'Number of Shares / Options Granted - 2',
            displayColumnName: 'Number of Shares / Options Granted - 2',
            dataAttributeName: 'numberOfSharesOptionsGranted2',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'GRANTDATE2',
            xlsxDisplayColumnName: 'Grant Date - 2',
            displayColumnName: 'Grant Date - 2',
            dataAttributeName: 'grantedDate2',
            expectedType: 'd',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'GRANTPRICECURRENCY2',
            xlsxDisplayColumnName: 'Grant Price Currency - 2',
            displayColumnName: 'Grant Price Currency - 2',
            dataAttributeName: 'grantPriceCurrency2',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'GRANTPRICE2',
            xlsxDisplayColumnName: 'Grant Price - 2',
            displayColumnName: 'Grant Price - 2',
            dataAttributeName: 'grantPrice2',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'TYPEOFLONGTERMINCENTIVE3SOSARRSPSPU',
            xlsxDisplayColumnName: 'Type of Long-term Incentive - 3 (SO, SAR, RS, PS, PU)',
            displayColumnName: 'Type of Long-Term Incentive - 3',
            dataAttributeName: 'TypeOfLongTermIncentives3',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'NUMBEROFSHARESOPTIONSGRANTED3',
            xlsxDisplayColumnName: 'Number of Shares / Options Granted - 3',
            displayColumnName: 'Number of Shares / Options Granted - 3',
            dataAttributeName: 'numberOfSharesOptionsGranted3',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        },
        {
            normalizedColumnName: 'GRANTDATE3',
            xlsxDisplayColumnName: 'Grant Date - 3',
            displayColumnName: 'Grant Date - 3',
            dataAttributeName: 'grantedDate3',
            expectedType: 'd',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'GRANTPRICECURRENCY3',
            xlsxDisplayColumnName: 'Grant Price Currency - 3',
            displayColumnName: 'Grant Price Currency - 3',
            dataAttributeName: 'grantPriceCurrency3',
            expectedType: 's',
            isRequired: false,
            isYN: false,
            minValue: false
        },
        {
            normalizedColumnName: 'GRANTPRICE3',
            xlsxDisplayColumnName: 'Grant Price - 3',
            displayColumnName: 'Grant Price - 3',
            dataAttributeName: 'grantPrice3',
            expectedType: 'n',
            isRequired: false,
            isYN: false,
            minValue: 0
        }
    ],

    COUNTRY_ISO_METADATA: {
        "Afghanistan - AF": {
            country_id: 1,
            country_name: "Afghanistan",
            country_isocode: "AF"
        },
        "Albania - AL": {
            country_id: 2,
            country_name: "Albania",
            country_isocode: "AL"
        },
        "Algeria - DZ": {
            country_id: 3,
            country_name: "Algeria",
            country_isocode: "DZ"
        },
        "Angola - AO": {
            country_id: 6,
            country_name: "Angola",
            country_isocode: "AO"
        },
        "Argentina - AR": {
            country_id: 10,
            country_name: "Argentina",
            country_isocode: "AR"
        },
        "Armenia - AM": {
            country_id: 11,
            country_name: "Armenia",
            country_isocode: "AM"
        },
        "Australia - AU": {
            country_id: 13,
            country_name: "Australia",
            country_isocode: "AU"
        },
        "Austria - AT": {
            country_id: 14,
            country_name: "Austria",
            country_isocode: "AT"
        },
        "Azerbaijan - AZ": {
            country_id: 15,
            country_name: "Azerbaijan",
            country_isocode: "AZ"
        },
        "Bahrain - BH": {
            country_id: 17,
            country_name: "Bahrain",
            country_isocode: "BH"
        },
        "Bangladesh - BD": {
            country_id: 18,
            country_name: "Bangladesh",
            country_isocode: "BD"
        },
        "Belarus - BY": {
            country_id: 20,
            country_name: "Belarus",
            country_isocode: "BY"
        },
        "Belgium - BE": {
            country_id: 21,
            country_name: "Belgium",
            country_isocode: "BE"
        },
        "Belize - BZ": {
            country_id: 22,
            country_name: "Belize",
            country_isocode: "BZ"
        },
        "Bolivia - BO": {
            country_id: 26,
            country_name: "Bolivia",
            country_isocode: "BO"
        },
        "Bosnia and Herzegovina - BA": {
            country_id: 27,
            country_name: "Bosnia and Herzegovina",
            country_isocode: "BA"
        },
        "Botswana - BW": {
            country_id: 28,
            country_name: "Botswana",
            country_isocode: "BW"
        },
        "Brazil - BR": {
            country_id: 30,
            country_name: "Brazil",
            country_isocode: "BR"
        },
        "Brunei darussalam - BN": {
            country_id: 32,
            country_name: "Brunei darussalam",
            country_isocode: "BN"
        },
        "Bulgaria - BG": {
            country_id: 33,
            country_name: "Bulgaria",
            country_isocode: "BG"
        },
        "Cameroon - CM": {
            country_id: 37,
            country_name: "Cameroon",
            country_isocode: "CM"
        },
        "Canada - CA": {
            country_id: 38,
            country_name: "Canada",
            country_isocode: "CA"
        },
        "Chad - TD": {
            country_id: 42,
            country_name: "Chad",
            country_isocode: "TD"
        },
        "Chile - CL": {
            country_id: 43,
            country_name: "Chile",
            country_isocode: "CL"
        },
        "China - CN": {
            country_id: 44,
            country_name: "China",
            country_isocode: "CN"
        },
        "Colombia - CO": {
            country_id: 47,
            country_name: "Colombia",
            country_isocode: "CO"
        },
        "Costa Rica - CR": {
            country_id: 52,
            country_name: "Costa Rica",
            country_isocode: "CR"
        },
        "Cote d'Ivoire - CI": {
            country_id: 53,
            country_name: "Cote d'Ivoire",
            country_isocode: "CI"
        },
        "Croatia - HR": {
            country_id: 54,
            country_name: "Croatia",
            country_isocode: "HR"
        },
        "Cyprus - CY": {
            country_id: 56,
            country_name: "Cyprus",
            country_isocode: "CY"
        },
        "Czech Republic - CZ": {
            country_id: 57,
            country_name: "Czech Republic",
            country_isocode: "CZ"
        },
        "Denmark - DK": {
            country_id: 58,
            country_name: "Denmark",
            country_isocode: "DK"
        },
        "Dominican Republic - DO": {
            country_id: 61,
            country_name: "Dominican Republic",
            country_isocode: "DO"
        },
        "Ecuador - EC": {
            country_id: 63,
            country_name: "Ecuador",
            country_isocode: "EC"
        },
        "Egypt - EG": {
            country_id: 64,
            country_name: "Egypt",
            country_isocode: "EG"
        },
        "El Salvador - SV": {
            country_id: 65,
            country_name: "El Salvador",
            country_isocode: "SV"
        },
        "Estonia - EE": {
            country_id: 68,
            country_name: "Estonia",
            country_isocode: "EE"
        },
        "Falkland Islands (Malvinas) - FK": {
            country_id: 70,
            country_name: "Falkland Islands (Malvinas)",
            country_isocode: "FK"
        },
        "Fiji - FJ": {
            country_id: 72,
            country_name: "Fiji",
            country_isocode: "FJ"
        },
        "Finland - FI": {
            country_id: 73,
            country_name: "Finland",
            country_isocode: "FI"
        },
        "France - FR": {
            country_id: 74,
            country_name: "France",
            country_isocode: "FR"
        },
        "Gabon - GA": {
            country_id: 78,
            country_name: "Gabon",
            country_isocode: "GA"
        },
        "Georgia - GE": {
            country_id: 80,
            country_name: "Georgia",
            country_isocode: "GE"
        },
        "Germany - DE": {
            country_id: 81,
            country_name: "Germany",
            country_isocode: "DE"
        },
        "Ghana - GH": {
            country_id: 82,
            country_name: "Ghana",
            country_isocode: "GH"
        },
        "Greece - GR": {
            country_id: 84,
            country_name: "Greece",
            country_isocode: "GR"
        },
        "Guadeloupe - GP": {
            country_id: 87,
            country_name: "Guadeloupe",
            country_isocode: "GP"
        },
        "Guatemala - GT": {
            country_id: 89,
            country_name: "Guatemala",
            country_isocode: "GT"
        },
        "Honduras - HN": {
            country_id: 96,
            country_name: "Honduras",
            country_isocode: "HN"
        },
        "Hong Kong - HK": {
            country_id: 97,
            country_name: "Hong Kong",
            country_isocode: "HK"
        },
        "Hungary - HU": {
            country_id: 98,
            country_name: "Hungary",
            country_isocode: "HU"
        },
        "India - IN": {
            country_id: 100,
            country_name: "India",
            country_isocode: "IN"
        },
        "Indonesia - ID": {
            country_id: 101,
            country_name: "Indonesia",
            country_isocode: "ID"
        },
        "Iran - IR": {
            country_id: 102,
            country_name: "Iran",
            country_isocode: "IR"
        },
        "Iraq - IQ": {
            country_id: 103,
            country_name: "Iraq",
            country_isocode: "IQ"
        },
        "Ireland - IE": {
            country_id: 104,
            country_name: "Ireland",
            country_isocode: "IE"
        },
        "Israel - IL": {
            country_id: 105,
            country_name: "Israel",
            country_isocode: "IL"
        },
        "Italy - IT": {
            country_id: 106,
            country_name: "Italy",
            country_isocode: "IT"
        },
        "Jamaica - JM": {
            country_id: 107,
            country_name: "Jamaica",
            country_isocode: "JM"
        },
        "Japan - JP": {
            country_id: 108,
            country_name: "Japan",
            country_isocode: "JP"
        },
        "Jordan - JO": {
            country_id: 109,
            country_name: "Jordan",
            country_isocode: "JO"
        },
        "Kazakhstan - KZ": {
            country_id: 110,
            country_name: "Kazakhstan",
            country_isocode: "KZ"
        },
        "Kenya - KE": {
            country_id: 111,
            country_name: "Kenya",
            country_isocode: "KE"
        },
        "Korea - KR": {
            country_id: 114,
            country_name: "Korea",
            country_isocode: "KR"
        },
        "Korea, democratic people's republic of - KP": {
            country_id: 113,
            country_name: "Korea, democratic people's republic of",
            country_isocode: "KP"
        },
        "Kuwait - KW": {
            country_id: 115,
            country_name: "Kuwait",
            country_isocode: "KW"
        },
        "Kyrgyzstan - KG": {
            country_id: 116,
            country_name: "Kyrgyzstan",
            country_isocode: "KG"
        },
        "Latvia - LV": {
            country_id: 118,
            country_name: "Latvia",
            country_isocode: "LV"
        },
        "Lebanon - LB": {
            country_id: 119,
            country_name: "Lebanon",
            country_isocode: "LB"
        },
        "Libya - LY": {
            country_id: 122,
            country_name: "Libya",
            country_isocode: "LY"
        },
        "Lithuania - LT": {
            country_id: 124,
            country_name: "Lithuania",
            country_isocode: "LT"
        },
        "Luxembourg - LU": {
            country_id: 125,
            country_name: "Luxembourg",
            country_isocode: "LU"
        },
        "Macau - MO": {
            country_id: 126,
            country_name: "Macau",
            country_isocode: "MO"
        },
        "Macedonia - MK": {
            country_id: 127,
            country_name: "Macedonia",
            country_isocode: "MK"
        },
        "Madagascar - MG": {
            country_id: 128,
            country_name: "Madagascar",
            country_isocode: "MG"
        },
        "Malaysia - MY": {
            country_id: 130,
            country_name: "Malaysia",
            country_isocode: "MY"
        },
        "Maldives - MV": {
            country_id: 131,
            country_name: "Maldives",
            country_isocode: "MV"
        },
        "Martinique - MQ": {
            country_id: 135,
            country_name: "Martinique",
            country_isocode: "MQ"
        },
        "Mauritius - MU": {
            country_id: 137,
            country_name: "Mauritius",
            country_isocode: "MU"
        },
        "Mexico - MX": {
            country_id: 139,
            country_name: "Mexico",
            country_isocode: "MX"
        },
        "Moldova - MD": {
            country_id: 141,
            country_name: "Moldova",
            country_isocode: "MD"
        },
        "Morocco - MA": {
            country_id: 145,
            country_name: "Morocco",
            country_isocode: "MA"
        },
        "Mozambique - MZ": {
            country_id: 146,
            country_name: "Mozambique",
            country_isocode: "MZ"
        },
        "Myanmar - MM": {
            country_id: 147,
            country_name: "Myanmar",
            country_isocode: "MM"
        },
        "Namibia - NA": {
            country_id: 148,
            country_name: "Namibia",
            country_isocode: "NA"
        },
        "Netherlands - NL": {
            country_id: 151,
            country_name: "Netherlands",
            country_isocode: "NL"
        },
        "New Zealand - NZ": {
            country_id: 154,
            country_name: "New Zealand",
            country_isocode: "NZ"
        },
        "Nicaragua - NI": {
            country_id: 155,
            country_name: "Nicaragua",
            country_isocode: "NI"
        },
        "Nigeria - NG": {
            country_id: 157,
            country_name: "Nigeria",
            country_isocode: "NG"
        },
        "Norway - NO": {
            country_id: 161,
            country_name: "Norway",
            country_isocode: "NO"
        },
        "Oman - OM": {
            country_id: 162,
            country_name: "Oman",
            country_isocode: "OM"
        },
        "Pakistan - PK": {
            country_id: 163,
            country_name: "Pakistan",
            country_isocode: "PK"
        },
        "Palestinian Territory - PS": {
            country_id: 165,
            country_name: "Palestinian Territory",
            country_isocode: "PS"
        },
        "Panama - PA": {
            country_id: 166,
            country_name: "Panama",
            country_isocode: "PA"
        },
        "Papua New Guinea - PG": {
            country_id: 167,
            country_name: "Papua New Guinea",
            country_isocode: "PG"
        },
        "Paraguay - PY": {
            country_id: 168,
            country_name: "Paraguay",
            country_isocode: "PY"
        },
        "Peru - PE": {
            country_id: 169,
            country_name: "Peru",
            country_isocode: "PE"
        },
        "Philippines - PH": {
            country_id: 170,
            country_name: "Philippines",
            country_isocode: "PH"
        },
        "Poland - PL": {
            country_id: 172,
            country_name: "Poland",
            country_isocode: "PL"
        },
        "Portugal - PT": {
            country_id: 173,
            country_name: "Portugal",
            country_isocode: "PT"
        },
        "Qatar - QA": {
            country_id: 175,
            country_name: "Qatar",
            country_isocode: "QA"
        },
        "Reunion - RE": {
            country_id: 176,
            country_name: "Reunion",
            country_isocode: "RE"
        },
        "Romania - RO": {
            country_id: 177,
            country_name: "Romania",
            country_isocode: "RO"
        },
        "Russian Federation - RU": {
            country_id: 178,
            country_name: "Russian Federation",
            country_isocode: "RU"
        },
        "Saudi Arabia - SA": {
            country_id: 188,
            country_name: "Saudi Arabia",
            country_isocode: "SA"
        },
        "Senegal - SN": {
            country_id: 189,
            country_name: "Senegal",
            country_isocode: "SN"
        },
        "Serbia - RS": {
            country_id: 242,
            country_name: "Serbia",
            country_isocode: "RS"
        },
        "Seychelles - SC": {
            country_id: 190,
            country_name: "Seychelles",
            country_isocode: "SC"
        },
        "Singapore - SG": {
            country_id: 192,
            country_name: "Singapore",
            country_isocode: "SG"
        },
        "Slovakia - SK": {
            country_id: 193,
            country_name: "Slovakia",
            country_isocode: "SK"
        },
        "Slovenia - SI": {
            country_id: 194,
            country_name: "Slovenia",
            country_isocode: "SI"
        },
        "South Africa - ZA": {
            country_id: 197,
            country_name: "South Africa",
            country_isocode: "ZA"
        },
        "Spain - ES": {
            country_id: 199,
            country_name: "Spain",
            country_isocode: "ES"
        },
        "Sudan - SD": {
            country_id: 201,
            country_name: "Sudan",
            country_isocode: "SD"
        },
        "Swaziland - SZ": {
            country_id: 204,
            country_name: "Swaziland",
            country_isocode: "SZ"
        },
        "Sweden - SE": {
            country_id: 205,
            country_name: "Sweden",
            country_isocode: "SE"
        },
        "Switzerland - CH": {
            country_id: 206,
            country_name: "Switzerland",
            country_isocode: "CH"
        },
        "Syrian Arab Republic - SY": {
            country_id: 207,
            country_name: "Syrian Arab Republic",
            country_isocode: "SY"
        },
        "Taiwan - TW": {
            country_id: 208,
            country_name: "Taiwan",
            country_isocode: "TW"
        },
        "Tajikistan - TJ": {
            country_id: 209,
            country_name: "Tajikistan",
            country_isocode: "TJ"
        },
        "Tanzania - TZ": {
            country_id: 210,
            country_name: "Tanzania",
            country_isocode: "TZ"
        },
        "Thailand - TH": {
            country_id: 211,
            country_name: "Thailand",
            country_isocode: "TH"
        },
        "Trinidad and Tobago - TT": {
            country_id: 215,
            country_name: "Trinidad and Tobago",
            country_isocode: "TT"
        },
        "Tunisia - TN": {
            country_id: 216,
            country_name: "Tunisia",
            country_isocode: "TN"
        },
        "Turkey - TR": {
            country_id: 217,
            country_name: "Turkey",
            country_isocode: "TR"
        },
        "Turkmenistan - TM": {
            country_id: 218,
            country_name: "Turkmenistan",
            country_isocode: "TM"
        },
        "Uganda - UG": {
            country_id: 221,
            country_name: "Uganda",
            country_isocode: "UG"
        },
        "Ukraine - UA": {
            country_id: 222,
            country_name: "Ukraine",
            country_isocode: "UA"
        },
        "United Arab Emirates - AE": {
            country_id: 223,
            country_name: "United Arab Emirates",
            country_isocode: "AE"
        },
        "United Kingdom - GB": {
            country_id: 224,
            country_name: "United Kingdom",
            country_isocode: "GB"
        },
        "United States of America - US": {
            country_id: 225,
            country_name: "United States of America",
            country_isocode: "US"
        },
        "Uruguay - UY": {
            country_id: 227,
            country_name: "Uruguay",
            country_isocode: "UY"
        },
        "Uzbekistan - UZ": {
            country_id: 228,
            country_name: "Uzbekistan",
            country_isocode: "UZ"
        },
        "Venezuela - VE": {
            country_id: 231,
            country_name: "Venezuela",
            country_isocode: "VE"
        },
        "Vietnam - VN": {
            country_id: 232,
            country_name: "Vietnam",
            country_isocode: "VN"
        },
        "Yemen - YE": {
            country_id: 237,
            country_name: "Yemen",
            country_isocode: "YE"
        },
        "Zambia - ZM": {
            country_id: 240,
            country_name: "Zambia",
            country_isocode: "ZM"
        },
        "Zimbabwe - ZW": {
            country_id: 241,
            country_name: "Zimbabwe",
            country_isocode: "ZW"
        }
    },
        
    CURRENCY_CODE_METADATA: {
        "Afghani - AFN": {
            currency_name: "Afghani",
            currency_code: "AFN"
        },
        "Lek - ALL": {
            currency_name: "Lek",
            currency_code: "ALL"
        },
        "Algerian Dinar - DZD": {
            currency_name: "Algerian Dinar",
            currency_code: "DZD"
        },
        "US Dollar - USD": {
            currency_name: "US Dollar",
            currency_code: "USD"
        },
        "Kwanza - AOA": {
            currency_name: "Kwanza",
            currency_code: "AOA"
        },
        "East Caribbean Dollar - XCD": {
            currency_name: "East Caribbean Dollar",
            currency_code: "XCD"
        },
        "Argentine Peso - ARS": {
            currency_name: "Argentine Peso",
            currency_code: "ARS"
        },
        "Armenian Dram - AMD": {
            currency_name: "Armenian Dram",
            currency_code: "AMD"
        },
        "Aruban Guilder - AWG": {
            currency_name: "Aruban Guilder",
            currency_code: "AWG"
        },
        "Australian Dollar - AUD": {
            currency_name: "Australian Dollar",
            currency_code: "AUD"
        },
        "Azerbaijanian Manat - AZN": {
            currency_name: "Azerbaijanian Manat",
            currency_code: "AZN"
        },
        "Bahamian Dollar - BSD": {
            currency_name: "Bahamian Dollar",
            currency_code: "BSD"
        },
        "Bahraini Dinar - BHD": {
            currency_name: "Bahraini Dinar",
            currency_code: "BHD"
        },
        "Bangladeshi Taka - BDT": {
            currency_name: "Bangladeshi Taka",
            currency_code: "BDT"
        },
        "Barbados Dollar - BBD": {
            currency_name: "Barbados Dollar",
            currency_code: "BBD"
        },
        "Belarussian Ruble - BYR": {
            currency_name: "Belarussian Ruble",
            currency_code: "BYR"
        },
        "Belize Dollar - BZD": {
            currency_name: "Belize Dollar",
            currency_code: "BZD"
        },
        "CFA Franc BCEAO - XOF": {
            currency_name: "CFA Franc BCEAO",
            currency_code: "XOF"
        },
        "Bermudian Dollar (customarily known as Bermuda Dollar) - BMD": {
            currency_name: "Bermudian Dollar (customarily known as Bermuda Dollar)",
            currency_code: "BMD"
        },
        "Ngultrum - BTN": {
            currency_name: "Ngultrum",
            currency_code: "BTN"
        },
        "Indian Rupee - INR": {
            currency_name: "Indian Rupee",
            currency_code: "INR"
        },
        "Boliviano - BOB": {
            currency_name: "Boliviano",
            currency_code: "BOB"
        },
        "Bolivian Mvdol (Funds code) - BOV": {
            currency_name: "Bolivian Mvdol (Funds code)",
            currency_code: "BOV"
        },
        "Convertible Marks - BAM": {
            currency_name: "Convertible Marks",
            currency_code: "BAM"
        },
        "Pula - BWP": {
            currency_name: "Pula",
            currency_code: "BWP"
        },
        "Brazilian Real - BRL": {
            currency_name: "Brazilian Real",
            currency_code: "BRL"
        },
        "Brunei Dollar - BND": {
            currency_name: "Brunei Dollar",
            currency_code: "BND"
        },
        "Bulgarian Lev - BGN": {
            currency_name: "Bulgarian Lev",
            currency_code: "BGN"
        },
        "Burundian Franc - BIF": {
            currency_name: "Burundian Franc",
            currency_code: "BIF"
        },
        "Riel - KHR": {
            currency_name: "Riel",
            currency_code: "KHR"
        },
        "CFA Franc BEAC - XAF": {
            currency_name: "CFA Franc BEAC",
            currency_code: "XAF"
        },
        "Canadian Dollar - CAD": {
            currency_name: "Canadian Dollar",
            currency_code: "CAD"
        },
        "Cape Verde Escudo - CVE": {
            currency_name: "Cape Verde Escudo",
            currency_code: "CVE"
        },
        "Cayman Islands Dollar - KYD": {
            currency_name: "Cayman Islands Dollar",
            currency_code: "KYD"
        },
        "Chilean Peso - CLP": {
            currency_name: "Chilean Peso",
            currency_code: "CLP"
        },
        "Colombian Peso - COP": {
            currency_name: "Colombian Peso",
            currency_code: "COP"
        },
        "Unidad de Valor Real - COU": {
            currency_name: "Unidad de Valor Real",
            currency_code: "COU"
        },
        "Comoro Franc - KMF": {
            currency_name: "Comoro Franc",
            currency_code: "KMF"
        },
        "New Zealand Dollar - NZD": {
            currency_name: "New Zealand Dollar",
            currency_code: "NZD"
        },
        "Costa Rican Colon - CRC": {
            currency_name: "Costa Rican Colon",
            currency_code: "CRC"
        },
        "Croatian Kuna - HRK": {
            currency_name: "Croatian Kuna",
            currency_code: "HRK"
        },
        "Cuban Peso - CUP": {
            currency_name: "Cuban Peso",
            currency_code: "CUP"
        },
        "Cyprus Pound - CYP": {
            currency_name: "Cyprus Pound",
            currency_code: "CYP"
        },
        "Czech Koruna - CZK": {
            currency_name: "Czech Koruna",
            currency_code: "CZK"
        },
        "Franc Congolais - CDF": {
            currency_name: "Franc Congolais",
            currency_code: "CDF"
        },
        "Danish Krone - DKK": {
            currency_name: "Danish Krone",
            currency_code: "DKK"
        },
        "Djibouti Franc - DJF": {
            currency_name: "Djibouti Franc",
            currency_code: "DJF"
        },
        "Dominican Peso - DOP": {
            currency_name: "Dominican Peso",
            currency_code: "DOP"
        },
        "Egyptian Pound - EGP": {
            currency_name: "Egyptian Pound",
            currency_code: "EGP"
        },
        "Nakfa - ERN": {
            currency_name: "Nakfa",
            currency_code: "ERN"
        },
        "Kroon - EEK": {
            currency_name: "Kroon",
            currency_code: "EEK"
        },
        "Ethiopian Birr - ETB": {
            currency_name: "Ethiopian Birr",
            currency_code: "ETB"
        },
        "Euro - EUR": {
            currency_name: "Euro",
            currency_code: "EUR"
        },
        "Falkland Islands Pound - FKP": {
            currency_name: "Falkland Islands Pound",
            currency_code: "FKP"
        },
        "Fiji Dollar - FJD": {
            currency_name: "Fiji Dollar",
            currency_code: "FJD"
        },
        "Denar - MKD": {
            currency_name: "Denar",
            currency_code: "MKD"
        },
        "CFP franc - XPF": {
            currency_name: "CFP franc",
            currency_code: "XPF"
        },
        "Dalasi - GMD": {
            currency_name: "Dalasi",
            currency_code: "GMD"
        },
        "Lari - GEL": {
            currency_name: "Lari",
            currency_code: "GEL"
        },
        "Cedi - GHS": {
            currency_name: "Cedi",
            currency_code: "GHS"
        },
        "Gibraltar pound - GIP": {
            currency_name: "Gibraltar pound",
            currency_code: "GIP"
        },
        "Quetzal - GTQ": {
            currency_name: "Quetzal",
            currency_code: "GTQ"
        },
        "Guinea Franc - GNF": {
            currency_name: "Guinea Franc",
            currency_code: "GNF"
        },
        "Guyana Dollar - GYD": {
            currency_name: "Guyana Dollar",
            currency_code: "GYD"
        },
        "Haiti Gourde - HTG": {
            currency_name: "Haiti Gourde",
            currency_code: "HTG"
        },
        "Lempira - HNL": {
            currency_name: "Lempira",
            currency_code: "HNL"
        },
        "Hong Kong Dollar - HKD": {
            currency_name: "Hong Kong Dollar",
            currency_code: "HKD"
        },
        "Forint - HUF": {
            currency_name: "Forint",
            currency_code: "HUF"
        },
        "Iceland Krona - ISK": {
            currency_name: "Iceland Krona",
            currency_code: "ISK"
        },
            "Rupiah - IDR": {
            currency_name: "Rupiah",
            currency_code: "IDR"
        },
        "Iranian Rial - IRR": {
            currency_name: "Iranian Rial",
            currency_code: "IRR"
        },
        "Iraqi Dinar - IQD": {
            currency_name: "Iraqi Dinar",
            currency_code: "IQD"
        },
        "New Israeli Shekel - ILS": {
            currency_name: "New Israeli Shekel",
            currency_code: "ILS"
        },
        "Jamaican Dollar - JMD": {
            currency_name: "Jamaican Dollar",
            currency_code: "JMD"
        },
        "Japanese yen - JPY": {
            currency_name: "Japanese yen",
            currency_code: "JPY"
        },
        "Jordanian Dinar - JOD": {
            currency_name: "Jordanian Dinar",
            currency_code: "JOD"
        },
        "Tenge - KZT": {
            currency_name: "Tenge",
            currency_code: "KZT"
        },
        "Kenyan Shilling - KES": {
            currency_name: "Kenyan Shilling",
            currency_code: "KES"
        },
        "Kuwaiti Dinar - KWD": {
            currency_name: "Kuwaiti Dinar",
            currency_code: "KWD"
        },
        "Som - KGS": {
            currency_name: "Som",
            currency_code: "KGS"
        },
        "Kip - LAK": {
            currency_name: "Kip",
            currency_code: "LAK"
        },
        "Latvian Lats - LVL": {
            currency_name: "Latvian Lats",
            currency_code: "LVL"
        },
        "Lebanese Pound - LBP": {
            currency_name: "Lebanese Pound",
            currency_code: "LBP"
        },
        "Loti - LSL": {
            currency_name: "Loti",
            currency_code: "LSL"
        },
        "Liberian Dollar - LRD": {
            currency_name: "Liberian Dollar",
            currency_code: "LRD"
        },
        "Libyan Dinar - LYD": {
            currency_name: "Libyan Dinar",
            currency_code: "LYD"
        },
        "Lithuanian Litas - LTL": {
            currency_name: "Lithuanian Litas",
            currency_code: "LTL"
        },
        "Pataca - MOP": {
            currency_name: "Pataca",
            currency_code: "MOP"
        },
        "Malagasy Ariary - MGA": {
            currency_name: "Malagasy Ariary",
            currency_code: "MGA"
        },
        "Yuan Renminbi - CNY": {
            currency_name: "Yuan Renminbi",
            currency_code: "CNY"
        },
        "Kwacha - MWK": {
            currency_name: "Kwacha",
            currency_code: "MWK"
        },
        "Malaysian Ringgit - MYR": {
            currency_name: "Malaysian Ringgit",
            currency_code: "MYR"
        },
        "Rufiyaa - MVR": {
            currency_name: "Rufiyaa",
            currency_code: "MVR"
        },
        "Maltese Lira - MTL": {
            currency_name: "Maltese Lira",
            currency_code: "MTL"
        },
        "Ouguiya - MRO": {
            currency_name: "Ouguiya",
            currency_code: "MRO"
        },
        "Mauritius Rupee - MUR": {
            currency_name: "Mauritius Rupee",
            currency_code: "MUR"
        },
        "Mexican Peso - MXN": {
            currency_name: "Mexican Peso",
            currency_code: "MXN"
        },
        "Moldovan Leu - MDL": {
            currency_name: "Moldovan Leu",
            currency_code: "MDL"
        },
        "Tugrik - MNT": {
            currency_name: "Tugrik",
            currency_code: "MNT"
        },
        "Moroccan Dirham - MAD": {
            currency_name: "Moroccan Dirham",
            currency_code: "MAD"
        },
        "Metical - MZN": {
            currency_name: "Metical",
            currency_code: "MZN"
        },
        "Kyat - MMK": {
            currency_name: "Kyat",
            currency_code: "MMK"
        },
        "Namibian Dollar - NAD": {
            currency_name: "Namibian Dollar",
            currency_code: "NAD"
        },
        "Nepalese Rupee - NPR": {
            currency_name: "Nepalese Rupee",
            currency_code: "NPR"
        },
        "Netherlands Antillian Guilder - ANG": {
            currency_name: "Netherlands Antillian Guilder",
            currency_code: "ANG"
        },
        "Cordoba Oro - NIO": {
            currency_name: "Cordoba Oro",
            currency_code: "NIO"
        },
        "Naira - NGN": {
            currency_name: "Naira",
            currency_code: "NGN"
        },
        "North Korean Won - KPW": {
            currency_name: "North Korean Won",
            currency_code: "KPW"
        },
        "Norwegian Krone - NOK": {
            currency_name: "Norwegian Krone",
            currency_code: "NOK"
        },
        "Rial Omani - OMR": {
            currency_name: "Rial Omani",
            currency_code: "OMR"
        },
        "Pakistan Rupee - PKR": {
            currency_name: "Pakistan Rupee",
            currency_code: "PKR"
        },
        "Balboa - PAB": {
            currency_name: "Balboa",
            currency_code: "PAB"
        },
        "Kina - PGK": {
            currency_name: "Kina",
            currency_code: "PGK"
        },
        "Guarani - PYG": {
            currency_name: "Guarani",
            currency_code: "PYG"
        },
        "Nuevo Sol - PEN": {
            currency_name: "Nuevo Sol",
            currency_code: "PEN"
        },
        "Philippine Peso - PHP": {
            currency_name: "Philippine Peso",
            currency_code: "PHP"
        },
        "Zloty - PLN": {
            currency_name: "Zloty",
            currency_code: "PLN"
        },
        "Qatari Rial - QAR": {
            currency_name: "Qatari Rial",
            currency_code: "QAR"
        },
        "Romanian New Leu - RON": {
            currency_name: "Romanian New Leu",
            currency_code: "RON"
        },
        "Russian Ruble - RUB": {
            currency_name: "Russian Ruble",
            currency_code: "RUB"
        },
        "Rwanda Franc - RWF": {
            currency_name: "Rwanda Franc",
            currency_code: "RWF"
        },
        "Saint Helena Pound - SHP": {
            currency_name: "Saint Helena Pound",
            currency_code: "SHP"
        },
        "Samoan Tala - WST": {
            currency_name: "Samoan Tala",
            currency_code: "WST"
        },
        "Dobra - STD": {
            currency_name: "Dobra",
            currency_code: "STD"
        },
        "Saudi Riyal - SAR": {
            currency_name: "Saudi Riyal",
            currency_code: "SAR"
        },
        "Serbian Dinar - RSD": {
            currency_name: "Serbian Dinar",
            currency_code: "RSD"
        },
        "Seychelles Rupee - SCR": {
            currency_name: "Seychelles Rupee",
            currency_code: "SCR"
        },
        "Leone - SLL": {
            currency_name: "Leone",
            currency_code: "SLL"
        },
        "Singapore Dollar - SGD": {
            currency_name: "Singapore Dollar",
            currency_code: "SGD"
        },
        "Slovak Koruna - SKK": {
            currency_name: "Slovak Koruna",
            currency_code: "SKK"
        },
        "Solomon Islands Dollar - SBD": {
            currency_name: "Solomon Islands Dollar",
            currency_code: "SBD"
        },
        "Somali Shilling - SOS": {
            currency_name: "Somali Shilling",
            currency_code: "SOS"
        },
        "South African Rand - ZAR": {
            currency_name: "South African Rand",
            currency_code: "ZAR"
        },
        "South Korean Won - KRW": {
            currency_name: "South Korean Won",
            currency_code: "KRW"
        },
        "Sri Lanka Rupee - LKR": {
            currency_name: "Sri Lanka Rupee",
            currency_code: "LKR"
        },
        "Sudanese Pound - SDG": {
            currency_name: "Sudanese Pound",
            currency_code: "SDG"
        },
        "Surinam Dollar - SRD": {
            currency_name: "Surinam Dollar",
            currency_code: "SRD"
        },
        "Lilangeni - SZL": {
            currency_name: "Lilangeni",
            currency_code: "SZL"
        },
        "Swedish Krona - SEK": {
            currency_name: "Swedish Krona",
            currency_code: "SEK"
        },
        "Swiss Franc - CHF": {
            currency_name: "Swiss Franc",
            currency_code: "CHF"
        },
        "Syrian Pound - SYP": {
            currency_name: "Syrian Pound",
            currency_code: "SYP"
        },
        "New Taiwan Dollar - TWD": {
            currency_name: "New Taiwan Dollar",
            currency_code: "TWD"
        },
        "Somoni - TJS": {
            currency_name: "Somoni",
            currency_code: "TJS"
        },
        "Tanzanian Shilling - TZS": {
            currency_name: "Tanzanian Shilling",
            currency_code: "TZS"
        },
        "Baht - THB": {
            currency_name: "Baht",
            currency_code: "THB"
        },
        "Pa'anga - TOP": {
            currency_name: "Pa'anga",
            currency_code: "TOP"
        },
        "Trinidad and Tobago Dollar - TTD": {
            currency_name: "Trinidad and Tobago Dollar",
            currency_code: "TTD"
        },
        "Tunisian Dinar - TND": {
            currency_name: "Tunisian Dinar",
            currency_code: "TND"
        },
        "New Turkish Lira - TRY": {
            currency_name: "New Turkish Lira",
            currency_code: "TRY"
        },
        "Manat - TMM": {
            currency_name: "Manat",
            currency_code: "TMM"
        },
        "Uganda Shilling - UGX": {
            currency_name: "Uganda Shilling",
            currency_code: "UGX"
        },
        "Hryvnia - UAH": {
            currency_name: "Hryvnia",
            currency_code: "UAH"
        },
        "United Arab Emirates dirham - AED": {
            currency_name: "United Arab Emirates dirham",
            currency_code: "AED"
        },
        "Pound Sterling - GBP": {
            currency_name: "Pound Sterling",
            currency_code: "GBP"
        },
        "Peso Uruguayo - UYU": {
            currency_name: "Peso Uruguayo",
            currency_code: "UYU"
        },
        "Uzbekistan Som - UZS": {
            currency_name: "Uzbekistan Som",
            currency_code: "UZS"
        },
        "Vatu - VUV": {
            currency_name: "Vatu",
            currency_code: "VUV"
        },
        "Venezuelan bolívar - VEB": {
            currency_name: "Venezuelan bolívar",
            currency_code: "VEB"
        },
        "Vietnamese đồng - VND": {
            currency_name: "Vietnamese đồng",
            currency_code: "VND"
        },
        "Yemeni Rial - YER": {
            currency_name: "Yemeni Rial",
            currency_code: "YER"
        },
        "Kwacha - ZMK": {
            currency_name: "Kwacha",
            currency_code: "ZMK"
        },
        "Zimbabwe Dollar - ZWD": {
            currency_name: "Zimbabwe Dollar",
            currency_code: "ZWD"
        }
    },

    SURVEY_ERROR_CHECK_INFO: {
        expected_entries: 10,
        LTI_plan: true,
        STI_plan: true,
        STI_plan_payout: true,
        employee_grade_band: true,
        country_code: "US",
        minimum_requirements: [
            "country",
            "currency",
            "employee_job_title",
            "employee_work_location",
            "basic_payments",
            "full_time_status",
            "fte_percentage"
        ]
    },

    EXPECTED_TYPE_TEXTS: {
        'n': "a number",
        's': "text",
        'd': "a date"
    },

    getCountry: function(code) {
        return this.COUNTRY_ISO_METADATA[code];
    },

    getCurrency: function(code) {
        return this.CURRENCY_CODE_METADATA[code];
    },

    getDBColumnsCount: function() {
        return this.DB_COLUMNS_METADATA.length;
    },

    getDBColumnsMetaData: function() {
        return this.DB_COLUMNS_METADATA;
    }
};
