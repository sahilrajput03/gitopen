'use strict';
module.exports = {
  'base': '{protocol}://{hostname}/{username}/{reponame}',
  'home': '',
  'issues': '/issues',
  'issues/id': '/issues/{issue-id}',
  'issues/new': '/issues/new',
  'issues/new?title': '/issues/new?title={title}',
  'wiki': '/wikis',
  'network': '/graph',
  'tree': '/tree/{hash}{path}',
  'blob': '/tree/{hash}{path}',
  'commit': '/commit/{hash}',
  'commits': '/commits',
  'commits-with-branch': '/commits/{branch-name}',
  'branches': '/repository/branches',
  'milestones': '',
  'milestones/new': '',
  'milestones/id': '',
  'tags': '/tags',
  'releases': '/releases',
  'releases/new': '/releases/new',
  'releases/new-with-tag': '/releases/new?tag={tag}',
  'releases/edit/tag-id': '/releases/edit/{tag}',
  'pulls': '/merge_requests',
  'pulls/id': '/merge_requests/{pull-id}',
  'pulls/new': '/compare',
  'pulls/new-with-compare-branch': '/compare/{branch-B}?expand=1',
  'pulls/new-with-base-branch': '/compare/{branch-A}...{branch-B}',
  'snippets/new': '{protocol}://{hostname}/snippets_manage',
};